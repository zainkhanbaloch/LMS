import React from 'react';
import './style.css';

const StudentDetailsEntry = () => {
    return <div className='col-12 d-flex flex-column align-items-center justify-content-center p-0 student-details'>
        <div className='main'>
            <h1 className='first'>Entry Test School</h1>
            <hr></hr>

            <div className='input-group mb-3 info'>
  <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<div className='input-group mb-3 info'>
                <label className='input-group-text' for="inputGroupSelect01">Class</label>
                <select className='form-select' id="inputGroupSelect01">
                    <option selected>10th</option>
                    <option value="1">9th</option>
                </select>
            </div>            

            <div className='input-group mb-3 info'>
                <label className='input-group-text' for="inputGroupSelect01">Year Of Birth</label>
                <select className='form-select' id="inputGroupSelect01">
                    <option selected>2001</option>
                    <option value="1">2002</option>
                    <option value="2">2003</option>
                    <option value="3">2004</option>
                    <option value="4">2005</option>
                    <option value="5">2006</option>
                    <option value="6">2007</option>
                    <option value="7">2008</option>
                    <option value="8">2009</option>
                    <option value="9">2010</option>
                    <option value="10">2011</option>
                    <option value="11">2012</option>
                    <option value="12">2013</option>
                    <option value="13">2014</option>
                    <option value="14">2015</option>
                    <option value="15">2016</option>
                    <option value="16">2017</option>
                    <option value="17">2018</option>
                    <option value="18">2019</option>
                    <option value="19">2020</option>
                    <option value="20">2021</option>
                    <option value="21">2022</option>
                </select>
            </div>

            <div className='input-group mb-3 info'>
                <label className='input-group-text' for="inputGroupSelect01">Month Of Birth</label>
                <select className='form-select' id="inputGroupSelect01">
                    <option selected>January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                </select>
            </div>


            <div className='input-group mb-3 info'>
                <label className='input-group-text' for="inputGroupSelect01">Date Of Birth</label>
                <select className='form-select' id="inputGroupSelect01">
                    <option selected>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
                    <option value="7">8</option>
                    <option value="8">9</option>
                    <option value="9">10</option>
                    <option value="10">11</option>
                    <option value="11">12</option>
                    <option value="12">13</option>
                    <option value="13">14</option>
                    <option value="14">15</option>
                    <option value="15">16</option>
                    <option value="16">17</option>
                    <option value="17">18</option>
                    <option value="18">19</option>
                    <option value="19">20</option>
                    <option value="20">21</option>
                    <option value="21">22</option>
                    <option value="12">23</option>
                    <option value="13">24</option>
                    <option value="14">25</option>
                    <option value="15">26</option>
                    <option value="16">27</option>
                    <option value="17">28</option>
                    <option value="18">29</option>
                    <option value="19">30</option>
                    <option value="20">31</option>
                </select>
            </div>

            <button type="button" className='btn btn-outline-primary button'>Continue</button>
        
        </div>
        {/* Ask for student name 
Ask for student age
Ask for student class
Button that says start entry*/}

    </div>
};
export default StudentDetailsEntry;