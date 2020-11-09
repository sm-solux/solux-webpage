import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/study.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/project.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                더 알아보기
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            SOLUX는 현재 *12개의 전공, 44명의 학우들과 함께
            <br />
            건전한 개발자 커뮤니티를 형성하며 성장하고 있습니다.
          </h2>
          <p>
            <i>*2020.11.08 기준</i>
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Teamblog</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Facebook</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Github</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            언택트 시대에도 계속되는
            <br />
            솔룩스 세미나
          </h2>
          <p>
            오프라인은 물론, 온라인에서도 솔룩스의 세미나는 계속됩니다.<br/>
            2020년 언택트 시대, 솔룩스는 구름에듀의 데벨업 플랫폼을 통해 6회의 온라인 세미나를 진행했습니다.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            탄탄한 기본기를 위한
            <br />
            정기 스터디
          </h2>
          <p>
            2020년까지는 멘토-멘티제로 스터디를 진행했으며, 2019년까지는 C/C++과 Python, 2020년에는 Python 위주로 진행했습니다. <br/>
            2021년부터는 웹과 데이터 분석 스터디로 나눠 진행할 예정입니다.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            25년 그 이상의 역사를 함께한
            <br />
            선배님들의 Homecoming Day
          </h2>
          <p>
            긴 역사를 자랑하는 솔룩스인 만큼 다양한 분야, 다양한 직책에 든든한 선배님들이 계십니다. 일년에 한 번, 솔룩스의 자랑이신 선배님들이 개발자를 꿈꾸는 솔룩스 후배들과 만나는 특별한 시간을 갖습니다.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic4} alt="" />
        </div>
        <div className="content">
          <h2>
            솔룩스 활동의 결실,
            <br />
            프로젝트 발표회
          </h2>
          <p>
            매년 겨울, 프로젝트 발표회를 진행합니다. 여름방학 때 프로젝트 팀빌딩을 진행하며, 2학기와 겨울방학동안 팀원들과 함께 하나의 프로젝트를 완성하기 위해 노력합니다.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>그 외 활동과 링크</h2>
        </header>
        <ul className="features">
          <li className="icon solid fa-laptop">
            <h3>모각코</h3>
            <p>
              모각코는 '모여서 각자 코딩'의 줄임말로, 언택트 시대인만큼 온라인으로 진행됩니다. 노래를 틀어놓거나 잡담을 하는 등 자유로운 분위기에서 진행합니다.
            </p>
          </li>
          <li className="icon fa-paper-plane">
            <h3>역대 프로젝트 아카이브</h3>
            <p>
            <a href="/#" className="button primary">
                이동하기
              </a>
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>스터디 소모임</h3>
            <p>
              정기 스터디 외에도 솔룩스 Slack에서 팀원을 모아 원하는 주제로 스터디를 진행할 수 있습니다.
              스터디를 위한 소정의 지원금도 지원받을 수 있습니다.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>SOLUX 팀블로그</h3>
            <p>
            <a href="https://solux.tistory.com/" className="button primary">
                이동하기
              </a>
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>시험기간 이벤트</h3>
            <p>
              공부하느라 지친 부원들을 위해 시험기간 이벤트를 진행합니다. 
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>공식 SNS</h3>
            <a href="https://www.instagram.com/only_solux/" className="button primary">
                이동하기
              </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>SOLUX와 함께 할 숙명인을 찾습니다</h2>
          <p>
            26기 SOLUX 부원(웹/데이터)을 모집합니다. 자세한 사항은 옆의 '더 알아보기' 버튼을 눌러 확인해주세요.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              지원하기
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              더 알아보기
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
