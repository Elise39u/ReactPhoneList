import React from "react"
import { Alert } from "react-bootstrap";

// Interface om er voor te zorgen dat Numbers ook echt alleen een number array is 
interface PhoneNumberOverviewProps {
    numbers: number[];
}

// Interface voor error handeling 
interface PhoneNumberOverviewState {
    showError: boolean;
    showModal: boolean;
}

class Overview extends React.Component<PhoneNumberOverviewProps, PhoneNumberOverviewState> {
    constructor(props: PhoneNumberOverviewProps) {
        super(props);

        this.state = {
            showError: this.props.numbers.length > 8,
            showModal: true,
        };
    }

    render() {
        if (this.state.showError) {
            return (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        We deceted that the phonenumber list contains more then 8 entrys <br />
                        Current length is: {this.props.numbers.length}
                    </p>
                </Alert>
            )
        }

        return (
            <div>
                <h2>Phone Numbers</h2>
                <ul>
                    {this.props.numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default Overview;