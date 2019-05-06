import React from "react";

class ProductsRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }

  handleProductClick() {
    const item = this.props.item;
    if (!item.stocked) {
      alert("The product is not stocked.");
      return;
    }
    this.props.toHandleProductClick(this.props.item);
  }

  deleteClick() {
    this.props.handleDeleteClick(this.props.item);
  }

  render() {
    const item = this.props.item;
    const color = !item.stocked ? "red" : "black";
    return (
      <tr>
        <td style={{ color: color }} onClick={this.handleProductClick}>
          {this.props.item.name}
        </td>
        <td>{this.props.item.price}</td>
        {this.props.showCard && (
          <td style={{ color: "red" }} onClick={this.deleteClick}>
            X
          </td>
        )}
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <strong>{this.props.category}</strong>
        </td>
      </tr>
    );
  }
}

class ListOfProducts extends React.Component {
  constructor(props) {
    super(props);
    this.addtoShopList = this.addtoShopList.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  addtoShopList(product) {
    const { shoppingCard } = this.props;
    let found = false;
    if (shoppingCard.length > 0) {
      found = shoppingCard.find(item => {
        if (item.name === product.name) {
          return true;
        }
      });
    }
    if (found) {
      return;
    }
    this.props.increaseShoppingList(product);
  }

  deleteProduct(product) {
    this.props.toDeleteProduct(product);
  }

  render() {
    const { products, stocked, text, shoppingCard, showCard } = this.props;
    const showingProducts = showCard ? shoppingCard : products;
    const rows = [];
    let lastCategory = null;
    showingProducts.forEach(product => {
      if (stocked && !product.stocked) {
        return;
      }
      if (product.name.indexOf(text) === -1) {
        return;
      }
      if (product.category !== lastCategory && !showCard) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }
      rows.push(
        <ProductsRow
          key={product.name}
          item={product}
          toHandleProductClick={this.addtoShopList}
          showCard={showCard}
          handleDeleteClick={this.deleteProduct}
        />
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <td>
              <strong>Name</strong>
            </td>
            <td>
              <strong>price</strong>
            </td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shoppingCard: false };

    this.handleTockCheck = this.handleTockCheck.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.goToShopingCard = this.goToShopingCard.bind(this);
  }

  handleTockCheck(e) {
    this.props.toCheckboxChange(e.target.checked);
  }

  handleInput(e) {
    this.props.toChangeInput(e.target.value);
  }

  goToShopingCard() {
    this.props.toShowingShoppingCard(!this.state.shoppingCard);
    this.setState({ shoppingCard: !this.state.shoppingCard });
  }

  render() {
    const { text, stocked, shoppingCard } = this.props;
    return (
      <form>
        <p>
          <input type="text" value={text} onChange={this.handleInput} />
          {shoppingCard.length > 0 && (
            <input
              type="button"
              value={shoppingCard.length}
              onClick={this.goToShopingCard}
            />
          )}
        </p>
        <p>
          <input
            type="checkbox"
            onChange={this.handleTockCheck}
            checked={stocked}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class SummaryPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.backToPurchase();
  }

  render() {
    let totalPrice = 0;
    console.log(this.props.products);
    this.props.products.map(
      product => (totalPrice = totalPrice + parseFloat(product.price.slice(1)))
    );
    const rounded = Math.round(totalPrice * 100) / 100;
    return (
      <div>
        <p>Total Price: $ {rounded.toString()}</p>
        <input
          type="button"
          value="Add new items"
          onClick={this.handleChange}
        />
      </div>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      stocked: false,
      shoppingCard: [],
      showCard: false
    };

    this.showStockOnly = this.showStockOnly.bind(this);
    this.handleSearchItem = this.handleSearchItem.bind(this);
    this.handleAddProductToShoppingCard = this.handleAddProductToShoppingCard.bind(
      this
    );
    this.showPurchasedProducts = this.showPurchasedProducts.bind(this);
    this.deleteFromShoppingCard = this.deleteFromShoppingCard.bind(this);
    this.handleBackToPurchase = this.handleBackToPurchase.bind(this);
  }

  showStockOnly(stocked) {
    this.setState({ stocked });
  }

  handleBackToPurchase() {
    this.setState({ showCard: false });
  }

  handleSearchItem(text) {
    this.setState({ text });
  }

  handleAddProductToShoppingCard(product) {
    this.setState({
      ...this.state,
      shoppingCard: this.state.shoppingCard.concat(product)
    });
  }

  showPurchasedProducts(showCard) {
    this.setState({ showCard });
  }

  deleteFromShoppingCard(product) {
    this.setState({
      ...this.state,
      shoppingCard: this.state.shoppingCard.filter(
        item => item.name !== product.name
      )
    });
    this.setState(state => {
      if (state.shoppingCard.length === 0) {
        state.showCard = false;
      }
    });
  }

  render() {
    const products = this.props.products;

    return (
      <div>
        {!this.state.showCard && (
          <SearchBar
            {...this.state}
            toCheckboxChange={this.showStockOnly}
            toChangeInput={this.handleSearchItem}
            toShowingShoppingCard={this.showPurchasedProducts}
          />
        )}
        <ListOfProducts
          products={products}
          {...this.state}
          increaseShoppingList={this.handleAddProductToShoppingCard}
          toDeleteProduct={this.deleteFromShoppingCard}
        />
        {this.state.showCard && (
          <SummaryPurchase
            products={this.state.shoppingCard}
            backToPurchase={this.handleBackToPurchase}
          />
        )}
      </div>
    );
  }
}

export default ProductTable;
