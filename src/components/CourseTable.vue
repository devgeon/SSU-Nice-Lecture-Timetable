<template>
    <div>
        <div class="filter" style="margin-bottom:30px;">
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
                    style="height: 650px; overflow: auto; width: 80%; display: block"
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
                        <p id="subject_area"></p>
                        <p id="etc"></p>
                    </div>
                </div>
            </div>
        </div> 

        
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
