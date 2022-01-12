import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.extension.style.scss';
import ProgressBar from 'component/ProgressBar/ProgressBar.component';

export class Checkout extends SourceCheckout {
    render(){
        const { stepMap } = this;
        console.log(stepMap)
        const { checkoutStep } = this.props;
        return(
            <>
                <ProgressBar stepMap={stepMap} checkoutStep={checkoutStep} />
                <SourceCheckout
                    {...this.props}
                />
            </>
        )
    }
}

export default Checkout;