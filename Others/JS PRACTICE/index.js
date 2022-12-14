const cart = ["Kurtas", "Pants", "Watches"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    // console.log(promise);
  })

  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .then(function (orderId) {
    return showOrderSummery(orderId);
  })
  .then(function (summeryInfo) {
    console.log(summeryInfo);
  })
  .then(function (summeryInfo) {
    return updateWalletBalance(summeryInfo);
  })
  .then(function (updateWallet) {
    console.log(updateWallet);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("I will definietely executed");
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not Valid");
      reject(err);
    }

    const orderId = "123";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 3000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment is Successful");
  });
}

function showOrderSummery(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Your oder summery is here");
  });
}

function updateWalletBalance(summeryInfo) {
  return new Promise(function (resolve, reject) {
    resolve("Check your wallet balance is updated");
  });
}

function validateCart(orderId) {
  return true;
}

// showOrderSummery
// updateWalletBalance

// An promise is an object that evaluate completion of an asynchronous operation

