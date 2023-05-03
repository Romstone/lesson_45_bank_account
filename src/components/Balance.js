import React from 'react';
import {useSelector} from "react-redux";

/*
class Balance extends Component
{
    componentDidMount()
    {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount()
    {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <h1>Bank:</h1>
                <h3>Balance = {store.getState().balance}</h3>
            </div>
        );
    }
}

export default Balance;*/

const Balance = () =>
{
    const {balance, quote} = useSelector(state => state.account);
    return (
        <div>
            <h1 className={'text-center text-uppercase'}>Bank:</h1>
            <h4 className={'text-center text-uppercase'}>{quote}</h4>
            <h3 className={'text-center text-uppercase'}>Balance = {balance}</h3>
        </div>
    );
};

export default Balance;