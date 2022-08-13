import React from "react";

export default class FormElement extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? "YES" : "NO"}
    `);
    this.setState({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  };
  render() {
    return (
      <div style={{ margin: "100px auto", border: "1px solid black", padding: "20px" }}>
        <h1> FormElement Component </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama : <input type="text" name="nama" onChange={(e) => this.setState({ nama: e.target.value })} value={this.state.nama} />
          </label>
          <br />
          <label>
            Jurusan :
            <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
              <option value="">Pilih Jurusan</option>
              <option value="1. Teknik informatika">1. Teknik informatika</option>
              <option value="2. Teknik mesin">2. Teknik mesin</option>
              <option value="3. Teknik kimia">3. Teknik kimia</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin :
            <input type="radio" value="Laki-Laki" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Laki-Laki
            <input type="radio" value="Perempuan" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Perempuan
          </label>
          <br />
          <label>
            Alamat : <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })} value={this.state.alamat} />
          </label>
          <br />
          <label>
            Member : <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
          </label>
          <br />
          <button type="submit">Kirim</button>
        </form>
      </div>
    );
  }
}
