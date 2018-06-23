import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {

  state = {
    number : 0,
    list : [],
    send : ''

  }

  handleClick(){
    // 통신을 한다 (axios)
    axios.get('http://localhost:4000/test')
    .then((response)=>{
      console.log(response.data);
      this.setState({ list : response.data.result });
    }).catch((error)=>{
      console.log(error);
    })

}

  handleChange(e){
    this.setState({ send : e.target.value });
    // 통신을 한다
  }

  submitClick(){
    // 데이터를 백엔드에 보내준다
    // 입력시킨다 (POST)
    this.getNumberList();
    this.log(this.state.send);
    axios.post('http://localhost:4000/test',{ num : this.state.send })
    .than((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);

    });
  }

  getNumberList(){

  }

  render() {

    const { list } = this.state;

    const numberList = list.map((value)=>{
      return <h2 key ={value.id}>{value.number}</h2>
    });

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>통신하기</button>
        <h2>{numberList}</h2>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <button onClick={this.submitClick.bind(this)}>입력하기</button>
      </div>
    );
  }
}

export default Test;
