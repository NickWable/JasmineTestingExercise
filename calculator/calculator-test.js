
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('103.64');
});


it("should return a result with 2 decimal places", function() {
const values = {amount: 10001, years: 10, rate: 4.5};
expect(calculateMonthlyPayment(values)).toEqual('103.65');
});

it("should calculate really low interest rates", function() {
const values = {amount: 10000, years: 10, rate: 0.1};
expect(calculateMonthlyPayment(values)).toEqual('83.75');
});

it("should calculate high interest rates", function() {
const values = {amount: 10000, years: 10, rate: 100};
expect(calculateMonthlyPayment(values)).toEqual('833.39');
});
/// etc
