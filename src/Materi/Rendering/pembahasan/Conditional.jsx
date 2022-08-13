import React from "react";

export default class Conditional extends React.Component {
  state = {
    isLoading: true,
  };
  render() {
    // >>>>>> CARA PERTAMA >>>>>>
    // const isLogin = true;
    // if (isLogin) {
    //   return (
    //     <div>
    //       <h1>ini Conditional Component</h1>
    //       <hr />
    //       <h2>anda sudah login</h2>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>ini Conditional Component</h1>
    //       <hr />
    //       <h2>silahkan login</h2>
    //     </div>
    //   );
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>> CARA KE DUA >>>>>>>>>>>
    // const isLogin = false;
    // let message = "";
    // if (isLogin) {
    //   message = "anda sudah login";
    // } else {
    //   message = "silahkan login terlebih dahulu";
    // }
    // return (
    //   <div>
    //     <h1>{message}</h1>
    //   </div>
    // );
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>> CARA KE TIGA >>>>>>>>>>>
    // const isLoginTrue = true;
    // const isLoginFalse = false;
    // return (
    //   <div>
    //     {isLoginTrue && <h1>anda sudah login, ini true, pake operator && </h1>}
    //     {isLoginFalse || <h1>anda sudah login, ini false, pake operator || </h1>}
    //     <h1>yeay sudah login</h1>
    //   </div>
    // );
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // >>>>>>>> CARA KE EMPAT >>>>>>>>>>>
    // const isLogin = false;

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 3000);
    return (
      <div>
        <h1>operator ternary</h1>
        {/* {isLogin ? <h1>anda sudah login</h1> : <h1>anda belum login</h1>} */}
        {this.state.isLoading ? <h1>LOADING...</h1> : <h1 style={{ fontWeight: "bold" }}>Selamat datang calon Programer</h1>}
      </div>
    );
  }
}
