import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/HomeHeader';
import './DownloadApp.scss';
import Footer from '../HomePage/Footer';

class DownloadApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return (
      <>
        <HomeHeader />
        <div className="app container">
          <div className="app__header">
            <div className="app__header-title">Tải ứng dụng BookingCare cho Windows 10?</div>
            <br />
            <div className="app__header-desc">
              Hiện chúng tôi chưa hỗ trợ một ứng dụng riêng (Native App) cho hệ điều hành này
            </div>
            <br />
            <div className="app__header-choose">
              Nếu thực sự bạn đang sử dụng Android hay iPhone, vui lòng chọn hệ điều hành phù hợp với bạn bên
              dưới:
            </div>
          </div>

          <div className="app__img">
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

          <div className="app__footer">
            <div className="app__footer-title">
              Trong trường hợp thiết bị của bạn thực sự không được chúng tôi hỗ trợ 1 ứng dụng riêng, xin đừng
              phiền lòng.
            </div>
            <br />
            <div className="app__footer-link my-2">
              Website của chúng tôi https://bookingcare.vn hỗ trợ rất tốt hầu hết các thiết bị di động hiện
              nay. Gần như bạn có thể sử dụng toàn bộ những tính năng tiên tiến nhất của BookingCare tại địa
              chỉ đó.
            </div>
            <br />
            <div className="app__footer-ths">
              Trân trọng, <br />
              Đội ngũ BookingCare.
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadApp);
