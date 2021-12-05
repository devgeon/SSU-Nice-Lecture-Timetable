<template>
    <div>
        <div class="filter">
            <button type="button">
                <img src="@/assets/images/timetable/yellow.png" />
            </button>
            <button type="button">
                <img src="@/assets/images/timetable/red.png" />
            </button>
            <button type="button">
                <img src="@/assets/images/timetable/blue.png" />
            </button>
        </div>
        
        <div style="display: flex">
            
            <slot></slot>
            
            <div id="table">
                <div
                    class="info"
                    style="
                        width: 80%;
                        overflow: hidden;
                        display: block;
                        position: sticky;
                        top: 0;
                    "
                >
                    <p id="info1">과목번호</p>
                    <p id="info2">이수구분</p>
                   
                    <p id="info4">과목명</p>
                    <p id="info5">교수명</p>
                    <p id="info6">강의시간</p>
                    <p id="info7">강의실</p>
                    <p id="info8">학점(설계)</p>
                    <p id="info9">여석/수강인원</p>
                    <p id="info10">공학인증</p>
                    <p id="info11">교과영역</p>
                    <p id="info12">비고</p>
                </div>
               
                <div
                    style="height: 550px; overflow: auto; width: 80%; display: block"
                    id="table"
                >
                    <div
                        :id="course.idx % 2 == 0 ? 'greyBox' : 'whiteBox'"
                        v-for="course of courses"
                        :key="course.idx"
                    >
                        <p id="number">{{ course.number }}</p>
                        <p
                            id="course_main"
                            v-for="course_type of course.course_types"
                            :key="'ct' + course_type.idx"
                        >
                            <span class="hoverImg" :data-hover="course.department_name">
                                <img
                                    id="iconMain"
                                    :src="
                                        '/assets/images/timetable/' +
                                        course_type.type[0] +
                                        course_type.type[1] +
                                        '.png'
                                    "
                                    alt=""
                                />
                            </span>
                        </p>
                        <p id="name">{{ course.subject_name }}</p>
                        <p id="professor">{{ course.professors }}</p>
                        <div
                            id="timetables"
                            v-for="timetable of course.timetables"
                            :key="timetable.idx"
                        >
                            <p :id="'time' + timetable.idx">
                                {{
                                    timetable.day + " " + timetable.start + "~" + timetable.end
                                }}
                            </p>
                            <p :id="'loc' + timetable.idx">{{ timetable.loc.location }}</p>
                            <img
                                src="@/assets/images/timetable/greyLine.png"
                                alt=""
                                id="greyLine"
                            />
                        </div>
                        <p id="credit">
                            {{ course.credit + " (" + course.credit_planned + ")" }}
                        </p>
                        <p id="seats">{{ 0 }}</p>
                        <p id="certification">{{ course.certifications }}</p>
                        <p id="subject_area">{교과영역}</p>
                        <p id="etc">{비고}</p>
                    </div>
                </div>
            </div>
        </div> 

        <!-- <table >
            <thead>
                <tr class = "header" style="background: #e4e3e3; width:80%; position:sticky; top:0;">
                    <th>과목번호</th>
                    <th>이수구분</th>
                    <th>과목명</th>
                    <th>교수명</th>
                    <th>강의시간</th>
                    <th>강의실</th>
                    <th>학점(설계)</th>
                    <th>여석/수강인원</th>
                    <th>공학인증</th>
                    <th>교과영역</th>
                    <th>비고</th>
                </tr>
            </thead>

            <tbody style="height: 550px; overflow: auto; width: 80%; display: block;">
                
                <div
                    :id="course.idx % 2 == 0 ? 'greyBox' : 'whiteBox'"
                    v-for="course of courses"
                    :key="course.idx"
                >
                
                    <tr>
                        <td rowspan="2" id="number">{{ course.number }}</td>

                        <td rowspan="2" id="course_main"
                            v-for="course_type of course.course_types"
                            :key="'ct' + course_type.idx"
                        >
                            <span class="hoverImg">
                                <img
                                    id="iconMain"
                                    :src="
                                        '/assets/images/timetable/' +
                                        course_type.type[0] +
                                        course_type.type[1] +
                                        '.png'
                                    "
                                    alt=""
                                />
                            </span>
                        </td>

                        <td rowspan="2" id="name">{{ course.subject_name }}</td>
                        <td rowspan="2" id="professor">{{ course.professors }}</td>
                        
                        <div
                            id="timetables"
                            v-for="timetable of course.timetables"
                            :key="timetable.idx"
                            
                        >
                            <td rowspan="1" :id="'time' + timetable.idx" >
                                {{
                                    timetable.day + " " + timetable.start + "~" + timetable.end
                                }}
                            </td>
                            <td rowspan="1" :id="'loc' + timetable.idx">{{ timetable.loc.location }}</td>
                        </div>

                        <td rowspan="2" id="credit">
                            {{ course.credit + " (" + course.credit_planned + ")" }}
                        </td>
                        <td rowspan="2" id="seats">{{ 0 }}</td>
                        <td rowspan="2" id="certification">{{ course.certifications }}</td>
                        <td rowspan="2" id="subject_area">{교과영역}</td>
                        <td rowspan="2" id="etc">{비고}</td>
                    </tr>
                </div>

            </tbody>
        </table> -->
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'CourseTable',
        props: ["axios_params"],
        data() {
            return {
                courses: {},
            }
        },
        beforeMount() {
            console.log(this.axios_params)
            axios({
                method: "get",
                url: "/backend/course/",
                params: this.axios_params,
            }).then(
                (res) => {
                    let { data } = res;
                    this.courses = data;
                    console.log(data);
            },
            (err) => {
                console.log(err);
            }
            );
        },
    };
</script>

<style scoped>
#greyBox,
#whiteBox {
  height: 80px;
  width: 1700px;
}

#greyBox {
  background: #e4e3e3;
}

#whiteBox {
  background: #ffffff;
}

p {
  float: left;
}

.hoveImg {
  position: relative;
  border-bottom: 1px dotted black;
}

.hoverImg:before {
  content: attr(data-hover);
  visibility: hidden;
  opacity: 0;
  width: 140px;
  background-color: white;
  color: black;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  transition: opacity 1s ease-in-out;

  position: absolute;
  z-index: 1;
  left: 0;
  top: 110%;
}

.hoverImg:hover:before {
  opacity: 1;
  visibility: visible;
}
</style>
