import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import HomeFooter from './HomeFooter';

import '../HomePage/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <>
        <div className="section-share section-footer">
          <div className="section-container container">
            <div className="footer">
              <div className="footer-left">
                <div className="logo"></div>
                <br />
                <br />
                <br />
                <div className="footer-left__company">Công ty Cổ phần Công nghệ BookingCare</div>
                <div className="footer-left__location">
                  <i class="fas fa-map-marker-alt"></i>
                  <span> 28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</span>
                </div>
                <div className="footer-left__br">
                  <i class="fas fa-check"></i>
                  <span>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</span>
                </div>
                <div className="footer-left__certi"></div>
              </div>
              <div className="footer-right">
                <div className="link">
                  <div>Liên hệ hợp tác</div>
                  <div>Gói chuyển đổi số doanh nghiệp</div>
                  <div>Tuyển dụng</div>
                  <div>Câu hỏi thường gặp</div>
                  <div>Điều khoản sử dụng</div>
                  <div>Chính sách Bảo mật</div>
                  <div>Quy trình hỗ trợ giải quyết khiếu nại</div>
                  <div>Quy chế hoạt động</div>
                </div>
                <div className="locations">
                  <div className="locations__hanoi">
                    <span>Trụ sở tại Hà Nội</span>
                    <p>28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                  </div>
                  <div className="locations__hcm">
                    <span>Văn phòng tại TP Hồ Chí Minh</span>
                    <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                  </div>
                  <div className="support">
                    <span>Hỗ trợ khách hàng</span>
                    <p>support@bookingcare.vn (7h - 18h)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="download">
              <i class="fas fa-mobile-alt"></i>Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:
              <span> Android - iPhone/iPad - Khác</span>
            </div>
          </div>
        </div>
        <HomeFooter />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
