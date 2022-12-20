/* ----------------- TYPES ----------------- */
type Pricing = {
    amountBase: number
    percentageFeeRaising: number
    percentageFeeSubscription: number
}

type Investor = {
    amount: number
}

type InvestorWithFee = {
    amount: number
    amountBase: number
    amountFeeRaising: number
    amountFeeSubscription: number
}

/* ----------------- DATA ----------------- */
const investors: Investor[] = [
    {
        amount: 3000000
    },
    {
        amount: 1111000
    },
    {
        amount: 1100000
    },
    {
        amount: 1032000
    },
    {
        amount: 930000
    },
    {
        amount: 500000
    },
    {
        amount: 394000
    },
    {
        amount: 383000
    },
    {
        amount: 366000
    },
    {
        amount: 1000
    }
]

const pricing: Pricing = {
    amountBase: 4900,
    percentageFeeRaising: 0.01,
    percentageFeeSubscription: 0.1,
}

/* ----------------- FUNCTION ----------------- */
function calculateInvestorsFees(investors: Investor[], pricing: Pricing): InvestorWithFee[] {
    let investorsWithFee: InvestorWithFee[] = [];
    let totalAmount : number = 0;
    for(const investor of investors) {
        totalAmount += investor.amount;
    }
    for(const investor of investors) {
        let investorWithFee : InvestorWithFee = {
            amount:investor.amount,
            amountBase:Number((investor.amount*pricing.amountBase/totalAmount).toFixed(0)),
            amountFeeRaising:0,
            amountFeeSubscription:Number((pricing.percentageFeeSubscription*investor.amount).toFixed(0))
        }
        if(pricing.percentageFeeRaising*totalAmount > (10000 - pricing.amountBase)) {
            investorWithFee.amountFeeRaising = Number((investor.amount*(10000 - pricing.amountBase)/totalAmount).toFixed(0))
        }
        else {
            investorWithFee.amountFeeRaising = Number((pricing.percentageFeeRaising*investor.amount).toFixed(0))
        }
        investorsWithFee.push(investorWithFee)
    }
    return investorsWithFee
}

/* ----------------- RUN ----------------- */
console.log(calculateInvestorsFees(investors, pricing))


export const calculator = () => {

}


/* ----------------- TYPES ----------------- */
type Pricing = {
    amountBase: number
    percentageFeeRaising: number
    percentageFeeSubscription: number
}

type Investor = {
    amount: number
    customFee?: number
}

type InvestorWithFee = {
    amount: number
    amountBase: number
    amountFeeRaising: number
    amountFeeSubscription: number
}

/* ----------------- DATA ----------------- */
const investors: Investor[] = [
    {
        amount: 3000000,
        customFee: 0.05,
    },
    {
        amount: 1111000
    },
    {
        amount: 1100000
    },
    {
        amount: 1032000
    },
    {
        amount: 930000
    },
    {
        amount: 500000
    },
    {
        amount: 394000
    },
    {
        amount: 383000
    },
    {
        amount: 366000
    },
    {
        amount: 1000
    }
]

const investors2 : Investor[] = [
    {
        amount : 5000,
        customFee: 0.05,
    },
    {
        amount: 5000
    }
]

const pricing: Pricing = {
    amountBase: 4900,
    percentageFeeRaising: 0.01,
    percentageFeeSubscription: 0.1,
}

/* ----------------- FUNCTION ----------------- */
function calculateInvestorsFees(investors: Investor[], pricing: Pricing, max: number = 10000): InvestorWithFee[] {
    let investorsWithFee: InvestorWithFee[] = [];
    let totalAmount: number = getTotalAmount(investors)
    for(const investor of investors) {

        let investorWithFee : InvestorWithFee = {
            amount:investor.amount,
            amountBase:Number((investor.amount*pricing.amountBase/totalAmount).toFixed(0)),
            amountFeeRaising:getAmountFeeRaising(investor,totalAmount,max),
            amountFeeSubscription:Number((pricing.percentageFeeSubscription*investor.amount).toFixed(0))
        }
        investorsWithFee.push(investorWithFee)
    }
    return investorsWithFee
}

function getTotalAmount(investors : Investor[]) : number {
    let totalAmount : number = 0;
    for(const investor of investors) {
        totalAmount += investor.amount;
    }
    return totalAmount
}

function getAmountFeeRaising(investor: Investor,totalAmount:number,max:number) : number {
    let amountFeeRaising : number = 0;
    const checking : boolean = pricing.percentageFeeRaising*totalAmount > (max - pricing.amountBase);
    const rateFeeRaising : number = investor.customFee ? investor.customFee : pricing.percentageFeeRaising
    if(checking) {
        amountFeeRaising = Number((investor.amount*(max - pricing.amountBase)/totalAmount).toFixed(0))
    }
    else {
        amountFeeRaising = Number((rateFeeRaising*investor.amount).toFixed(0))
    }
    return amountFeeRaising
}

/* ----------------- RUN ----------------- */
console.log(calculateInvestorsFees(investors2, pricing))
