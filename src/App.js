import React,{Component,Fragment} from 'react';
import * as bs from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './static/baner.jpg';
import Avatar from './static/yagami.jpg';
import Pin from './static/chara.jpg';
// import './static/css/static.css';

const DatkZone = {backgroundColor:"black",minHeight:"150px",color:"whitesmoke",padding:"25px 0px"}
const WhiteZone = {backgroundColor:"white",minHeight:"150px",padding:"25px 0px",color:"darkgray",textAlign:"center"};
const FooterStyle = {height:"10em",backgroundImage:"url("+Background+")",backgroundSize:"cover",backgroundPosition:"center bottom"}

const Content = () => <div style={{height:"20em",backgroundImage:"url("+Background+")",backgroundSize:"cover",backgroundPosition:"center top"}} />

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            modals: false
        }
        this.handalModal = this.handalModal.bind(this);
    }

    handalModal = e => {
        console.log(e);
        this.setState({modals:!this.state.modals});
    }
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg" style={{position:"absolute",top:0,width:"100%"}}>
                    <div className="container-fluid">
                        <a style={{color:"white"}} class="navbar-brand col-sm-9" href="">Home</a>
                        <div className="input-group col-sm-3">
                            <input className="form-control" type="search" />
                            <div className="input-group-prepend">
                                <span onClick={this.handalModal} style={{cursor:"pointer"}} class="input-group-text">search</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <bs.Modal isOpen={this.state.modals} toggle={this.handalModal}>
                    <bs.ModalBody>
                        <p><h4>This feature can be useable in the fueture.<br/>But the future's naver come!</h4></p>
                        <button style={{float:"right"}} onClick={this.handalModal} className="btn btn-danger">Close</button>
                    </bs.ModalBody>
                </bs.Modal>
                <Content />                
            </div>
        )
    }
}

const FirstContent = () => {
    return(
        <div style={{padding:"0px 15px"}}>
            <div>
                <span className="justify-content-sm-center row">
                    <img src={Avatar} height="250px" className="rounded-circle" alt="img" style={{position:"absolute",zIndex:1,top:"10em"}} />
                </span>
            </div>

            <div style={{height:"100px"}} />

            <div className="container col-md-6" style={{textAlign:"center"}}>
                <div className="justify-content-md-center row">
                        <h2><small style={{fontWeight:"bold"}}>Yagami Light</small></h2>
                </div>

                <div className="justify-content-sm-center row">
                    <h4><small className="text-muted">Note Writer</small></h4>
                </div>

                <div className="justify-content-sm-center row" style={{color:"darkgray"}}>
                    <p>
                    Light Yagami (Japanese: 夜神月ライト Hepburn: Yagami Raito) is a fictional character and the protagonist of the manga series Death Note
                    , created by Tsugumi Ohba and Takeshi Obata. He is a bored teen genius who finds a supernatural notebook known as the Death Note
                    , which was dropped by the Shinigami Ryuk. Using the notebook
                    , which allows its owner to kill anyone simply by knowing their name and face.
                    </p>
                </div>
            </div>
        </div>
    )
}

const SecondContent = () => {
    return(
        <Fragment>
            <div style={DatkZone}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <h2>Character</h2>
                        <p>
                        Light grew up in Japan with his family, 
                        which consists of his father, Soichiro Yagami, 
                        who is a member of the Japanese Task Force (an investigation team opposing Kira), 
                        his mother, Sachiko Yagami, and his younger sister, Sayu Yagami.
                        At the start of the series, 
                        Light is a third-year high school student (12th Grade) at Daikoku Private Academy and also attends supplemental classes at Gamou Prep Academy in the beginning of the story. 
                        He later attends college at To-Oh University (東応大学, Tōō Daigaku).
                        </p><br /></div>

                        <div className="col-sm">
                        <h2>Plot</h2>
                        <p>
                        In the year 2003 (2006 in the anime), Light Yagami discovers a mysterious notebook on the ground at his school. 
                        Written on the cover are the words "Death Note". The Death Note's instructions state that if a human's name is written within it, 
                        that person shall die. Light is initially skeptical of the notebook's authenticity, but after experimenting with it, 
                        Light realizes that the Death Note is real.
                        </p>                             
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <h2>Appearance</h2>
                        <p>
                        Light grew up in Japan with his family, 
                        which consists of his father, Soichiro Yagami, 
                        who is a member of the Japanese Task Force (an investigation team opposing Kira), 
                        his mother, Sachiko Yagami, and his younger sister, Sayu Yagami.
                        At the start of the series, 
                        Light is a third-year high school student (12th Grade) at Daikoku Private Academy and also attends supplemental classes at Gamou Prep Academy in the beginning of the story. 
                        He later attends college at To-Oh University (東応大学, Tōō Daigaku).
                        </p><br /></div>

                        <div className="col-sm">
                        <h2>History</h2>
                        <p>
                        In the year 2003 (2006 in the anime), Light Yagami discovers a mysterious notebook on the ground at his school. 
                        Written on the cover are the words "Death Note". The Death Note's instructions state that if a human's name is written within it, 
                        that person shall die. Light is initially skeptical of the notebook's authenticity, but after experimenting with it, 
                        Light realizes that the Death Note is real.
                        </p>                             
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const ThirdContent = () => {
    return(
        <div style={WhiteZone} className="container">
            <span style={{textAlign:"left"}}><h1>Content</h1></span>
            <div className="row">
                <span className="col-sm">
                    <img src={Pin} height="150px" className="img-thumbnail" alt="img"/>
                    <p>
                        Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. 
                        Additional styling is done only with classes. For example, 
                        we reboot some {`<table>`} styles for a simpler baseline and later provide .table, 
                        .table-bordered, and more.
                    </p>
                </span>
                <span className="col-sm">
                    <img src={Pin} height="150px" className="img-thumbnail" alt="img"/>
                    <p>
                        Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. 
                        Additional styling is done only with classes. For example, 
                        we reboot some {`<table>`} styles for a simpler baseline and later provide .table, 
                        .table-bordered, and more.
                    </p>
                </span>
                <span className="col-sm">
                    <img src={Pin} height="150px" className="img-thumbnail" alt="img"/>
                    <p>
                        Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. 
                        Additional styling is done only with classes. For example, 
                        we reboot some {`<table>`} styles for a simpler baseline and later provide .table, 
                        .table-bordered, and more.
                    </p>
                </span>
                <span className="col-sm">
                    <img src={Pin} height="150px" className="img-thumbnail" alt="img"/>
                    <p>
                        Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. 
                        Additional styling is done only with classes. For example, 
                        we reboot some {`<table>`} styles for a simpler baseline and later provide .table, 
                        .table-bordered, and more.
                    </p>
                </span>
            </div>
        </div>
    )
}

const FooterContent = () => {
    return(
        <Fragment>
            <div style={FooterStyle} />
        </Fragment>
    )
}

export default class App extends Component{
    constructor(props){
        super(props)
    }
    render (){
        return (
            <div>
                <Navbar />
                <FirstContent /><br />
                <SecondContent />
                <ThirdContent />
                <FooterContent />
            </div>
        )
    }
}