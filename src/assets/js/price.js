class Price {
    constructor(amount, discount) {
        this.amount = amount;
        this.discount = discount;
    }

    discountPrice() {
        return this.amount - this.discount;
    }
}

export default Price;
