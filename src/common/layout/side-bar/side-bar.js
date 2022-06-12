import {Card} from "react-bootstrap";

const SideBar = ()=>{

    return(
        <>
            <Card className={'bg-primary rounded-0'} style={{ width: '25vh',
            }}>
                <Card.Body>
                    <Card style={{ minHeight:'100%',boxSizing:'border-box'}}>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </>
    )
}

export default SideBar