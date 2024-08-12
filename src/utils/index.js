function getFlashProducts(products) {
  return products.filter((item) => item.sale === true).slice(0, 8);
}

function getFeaturedProducts(products) {
  return products.filter((item) => item.sale === true).slice(0, 12);
}

function totalPrice(items) {
  return items.reduce((itemAcc, item) => {
    return (itemAcc += item.price * item.qty);
  }, 0);
}

function isWishListed(productId, wishList) {
  return wishList.findIndex((product) => product.id === productId) !== -1;
}

function getCompareList(items) {
  return items.slice(0, 4);
}

function searchFilter(row, search) {
  return row.title.toLowerCase().includes(search.toLowerCase()) || !search;
}

// short helper function
function checkLengNull(data) {
  if (data !== null) {
    return data.length > 0;
  }
  return false;
}

function isEquals(a, b) {
  if (a !== null && b !== null) {
    return a.toLowerCase() === b.toLowerCase();
  }
  return a === b;
}

function minValueOne(qty) {
  if (qty < 1) {
    return 1;
  }
  return qty;
}

// filter function
function filterProductByCategory(product, selected_category) {
  if (checkLengNull(selected_category)) {
    return product.category.toLowerCase() === selected_category.toLowerCase();
  }
  return true;
}

function filterProductByPrice(product, price) {
  if (checkLengNull(price)) {
    return product.price >= price[0] && product.price <= price[1];
  }
  return true;
}

function filterProductByColor(product, color) {
  if (checkLengNull(color)) {
    for (var i = 0; i < product.colors.length; i++) {
      if (product.colors[i].toLowerCase() === color.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  return true;
}

function filterProductBySize(product, size) {
  if (checkLengNull(size)) {
    for (var i = 0; i < product.size.length; i++) {
      if (product.size[i].toLowerCase() === size.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  return true;
}

function formatNdcCardNumber(number) {
  // Use a regular expression to add spaces after every 4 characters
  return (
    number.slice(0, 3) +
    " " +
    number.slice(3, 7) +
    " " +
    number.slice(7, 11) +
    " " +
    number.slice(11, 15) +
    " " +
    number.slice(15)
  );
}

function formatCardDate(dateString) {
  console.log(dateString);

  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Extract the month and year
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
  const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

  const test = `${month}/${year}`;
  console.log(test);

  return `${month}/${year}`;
}

export {
  getFlashProducts,
  formatCardDate,
  formatNdcCardNumber,
  getFeaturedProducts,
  totalPrice,
  isWishListed,
  filterProductByCategory,
  filterProductByPrice,
  filterProductByColor,
  filterProductBySize,
  isEquals,
  minValueOne,
  getCompareList,
  searchFilter,
};
