import React from 'react';

import { InputUsername, FormUsername , Submit } from './styles';

class Form extends React.Component{
    render(){
        return(
            <FormUsername action="">
                <InputUsername type="text" placeholder="Put your Github username here!"/>
                <Submit>Add card</Submit>
            </FormUsername>
        );
    }
}

export default Form;