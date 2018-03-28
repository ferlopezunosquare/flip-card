export class InputLoan {
   constructor(
    public LoanAmount : number,
    public Rate : number,
    public Term : number,
    public MonthlyPay : number,
    public OriginFee : number,
    public AnnualRate : number,
    public NetProc : number,
   ){ }
}
