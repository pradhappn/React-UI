// src/components/RightPanel.js
import React from "react";
import "./Rightpanel.css";

const RightPanel = () => {
  return (
    <div className="right-panel">
      {/* Calendar */}
      <div className="calendar">
        <h4>November 2021</h4>
        <table>
          <thead>
            <tr>
              <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th>
              <th>Thu</th><th>Fri</th><th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
            <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
            <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
            <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
            <tr><td>28</td><td>29</td><td>30</td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>

      {/* Mentors */}
      <div className="mentors">
        <h4>Mentors</h4>
        <div className="mentor-item">
          <div className="mentor-icon yellow">JK</div>
          <div>
            <p className="mentor-name">James King</p>
            <span>UX / UI Designer</span>
          </div>
        </div>
        <div className="mentor-item">
          <div className="mentor-icon pink">EH</div>
          <div>
            <p className="mentor-name">Evie Harris</p>
            <span>Graphic Designer</span>
          </div>
        </div>
        <div className="mentor-item">
          <div className="mentor-icon blue">GS</div>
          <div>
            <p className="mentor-name">Gilbert Smith</p>
            <span>Creative Director</span>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="learning-progress">
        <h4>Learning Progress</h4>

        <div className="progress-item">
          <p>Digital Marketing - Unit 3</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: "80%" }}></div></div>
        </div>

        <div className="progress-item">
          <p>Financial Analyst - Unit 1</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: "60%" }}></div></div>
        </div>

        <div className="progress-item">
          <p>Financial Analyst - Unit 2</p>
          <div className="progress-bar"><div className="progress-fill" style={{ width: "40%" }}></div></div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
