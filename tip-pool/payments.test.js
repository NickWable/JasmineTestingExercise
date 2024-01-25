describe('Payments test', function () {

    beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should not add a new payment to allPayments on submitPaymentInfo() if input is empty', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should update payment table on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td')
    });

it('should not add a new server to allServers on submitServerInfo() if input is empty', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
})
});