import React from 'react'

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('logIn') == null) localStorage.setItem('logIn', false);

    this.state = {
      showModal: false,
      showNameErr: false,
      showPassErr: false,
      logIn: JSON.parse(localStorage.getItem('logIn')),
      users: [
        { id: 1, fullName: 'admin', password: '1111' }
      ]
    }
  }

  closeModal = () => {
    document.querySelector('.popup_overlay').classList.add('popup_overlay-close')

    setTimeout(() => {
      this.setState({ showModal: false })
    }, 500)
  }

  logIn = e => {
    e.preventDefault()

    const userName = e.target.elements.userName,
      pass = e.target.elements.pass;

    this.setState({
      showNameErr: userName.selectionEnd <= 3 ? true : false,
      showPassErr: pass.selectionEnd <= 3 ? true : false
    }, () => {
      if (this.state.showNameErr || this.state.showPassErr) return null;

      this.state.users.forEach(user => {
        if (userName.value === user.fullName && pass.value === user.password) {
          localStorage.setItem('logIn', true);
          this.closeModal();

          setTimeout(() => {
            this.setState({ logIn: true })
          }, 600);

          return false;
        }
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.logIn && (
          <button className="bttn" onClick={() => this.setState({ showModal: true })}>LOGIN</button>
        )}

        {this.state.showModal &&
          (<div className="popup_overlay">
            <div className="popup_content">
              <form action="/login" className="form login-form" onSubmit={this.logIn}>
                <div className="form_item">
                  {this.state.showNameErr && <label htmlFor="userName" className="form_error">Enter username</label>}
                  <input type="text" className="form_field" id="userName" placeholder="user name" />
                </div>

                <div className="form_item">
                  {this.state.showPassErr && <label htmlFor="pass" className="form_error">Enter password</label>}
                  <input type="password" className="form_field" id="pass" placeholder="password" />
                </div>

                <div className="form_item">
                  <button className="form_button bttn">login</button>
                </div>
              </form>

              <button className="popup_close" onClick={() => this.closeModal()}>X</button>
            </div>
          </div>)}
      </React.Fragment>
    )
  }
}