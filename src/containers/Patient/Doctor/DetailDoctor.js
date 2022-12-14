import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';
import { getDetailInforDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import DoctorSchedule from './DoctorSchedule';
import DoctorExtraInfor from './DoctorExtraInfor';
import Footer from '../../HomePage/Footer';

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: {},
      currentDoctorId: -1,
    };
  }
  async componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.id) {
      let id = this.props.match.params.id;
      this.setState({
        currentDoctorId: id,
      });

      let res = await getDetailInforDoctor(id);

      if (res && res.errCode === 0) {
        this.setState({
          detailDoctor: res.data,
        });
      }
      //   imageBase64 = Buffer.from(user.image, "base64").toString("binary")
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let { language } = this.props;
    let { detailDoctor } = this.state;
    let nameVi = '',
      nameEn = '';
    if (detailDoctor && detailDoctor.positionData) {
      nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
      nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
    }
    return (
      <>
        <HomeHeader isShowBanner={false} />
        <div>
          <div className="doctor-detail-container my-5">
            <div className="intro-doctor">
              <div className="intro-doctor-content container">
                <div
                  className="content-left"
                  style={{
                    backgroundImage: `url(${detailDoctor && detailDoctor.image ? detailDoctor.image : ''})`,
                  }}
                ></div>
                <div className="content-right">
                  <div className="up">{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                  <div className="down">
                    {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description && (
                      <span>{detailDoctor.Markdown.description}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-doctor pb-5">
              <div className="schedule-doctor-content container mt-5">
                <div className="content-left">
                  <DoctorSchedule doctorIdFromParent={this.state.currentDoctorId} />
                </div>
                <div className="content-right">
                  <DoctorExtraInfor doctorIdFromParent={this.state.currentDoctorId} />
                </div>
              </div>
            </div>
            <div className="detail-infor-doctor">
              <div className="detail-infor-doctor-content mb-5 container">
                {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detailDoctor.Markdown.contentHTML,
                    }}
                  ></div>
                )}
              </div>
            </div>
            {/* 
            <div className="comment-doctor"></div> */}
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
