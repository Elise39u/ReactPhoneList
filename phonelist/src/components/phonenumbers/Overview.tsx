import React from "react"
import "../../css/phonenumbers/Overview.css"
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import Pencil from "../../img/svg/pencil-svgrepo-com.svg";
import TrashCan from "../../img/svg/trashcan-svgrepo-com.svg"

// Interface om er voor te zorgen dat Numbers ook echt alleen een number array is 
interface PhoneNumberOverviewProps {
    numbers: number[];
}

// Interface voor error handeling with support of the search query
interface PhoneNumberOverviewState {
    showError: boolean;
    searchQuery: string;
    showModal: boolean;
    filteredNumbers: number[];
}

class Overview extends React.Component<PhoneNumberOverviewProps, PhoneNumberOverviewState> {
    constructor(props: PhoneNumberOverviewProps) {
        super(props);

        this.state = {
            showError: this.props.numbers.length > 8,
            searchQuery: '',
            showModal: true,
            filteredNumbers: this.props.numbers,
        };
    }

    //Search function to filter Phonenumber list based on the given input 
    handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        this.setState({ searchQuery: query });

        // Filter numbers based on the search query
        const filtered = this.props.numbers.filter((number) =>
            number.toString().includes(query)
        );
        this.setState({ filteredNumbers: filtered });
    };

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
            <div className="overviewContainer">
                <h2>Phone Numbers</h2>
                <Form>
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={this.state.searchQuery}
                        onChange={this.handleSearch}
                        />
                    </Col>
                    </Row>
                </Form>
                {this.props.numbers.length < 8 &&
                    <Button className="FormButton" variant="primary" size="sm">
                        Add number
                    </Button>
                }
                {this.state.filteredNumbers.length === 0 ? (
                    <Alert variant="warning">
                        <Alert.Heading>Oh snap! Something went wrong</Alert.Heading>
                        <p>
                           Either your search result dindt match any results or an error occuerd! <br />
                           Please try again with a different result or try again later!
                        </p>
                    </Alert>
                ) : (
                    <ul className="phoneULEle">
                        {this.state.filteredNumbers.map((number, index) => (
                            <li className="phoneListLiEle" key={index}>
                                <p className="indexNumber">{index}</p> {number}
                                <img className={"svgImages pencil"} src={Pencil}  alt={"edit pencil svg"} />
                                <img className={"svgImages trashcan"} src={TrashCan}  alt={"delete trashcan svg"}/>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}


export default Overview;