describe('Helpers test', function () {

    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should calculate tip percent', function () {
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(200, 20)).toEqual(10);
    });

    it('should sum total tip amount', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 200;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(300);
    });

    it('should sum total bill amount', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
});