import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import '../HomePage.scss';
import { withRouter } from 'react-router';

class DownloadApp extends Component {
  handleDownloadApp = () => {
    if (this.props.history) {
      this.props.history.push(`download-app`);
    }
  };

  render() {
    return (
      <div className="section-share section-download-app">
        <div className="section-container container">
          <div className="section-body section-download-app">
            <div className="app">
              <div className="app__img img section-download-app" />
            </div>
            <div className="app-detail">
              <div className="app-detail__title">Tải ứng dụng BookingCare</div>
              <div className="app-detail__outstanding">
                <span>
                  <i class="fas fa-check"></i>Đặt khám nhanh hơn
                </span>
                <br />
                <span>
                  <i class="fas fa-check"></i>Nhận thông báo từ hệ thống
                </span>
                <br />
                <span>
                  <i class="fas fa-check"></i>Nhận hướng dẫn đi khám chi tiết
                </span>
              </div>
              <div className="app-detail__link">
                <a href="">
                  <img
                    className="link-img"
                    src="https://bookingcare.vn/assets/icon/google-play-badge.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    className="link-img"
                    src="https://bookingcare.vn/assets/icon/app-store-badge-black.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="app-detail__more">
                <div className="app-detail__more-link" onClick={() => this.handleDownloadApp()}>
                  Hoặc mở liên kết: <span>BookingCare App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DownloadApp));
