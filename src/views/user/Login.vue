<template>
  <div class="type_s">
    <div id="cWrap" class="login">
      <div id="sLogin">
        <div class="cont">
          <div class="area_login">
            <div class="wrap_tit">
              <h2 class="tit">
                통합 LOGIN
                <span class="txt_s">(sso 로그인)</span>
              </h2>
            </div>
            <form action="" name="LoginInfo">
              <input type="hidden" name="in_tp_bit" value="0" />
              <input type="hidden" name="rqst_caus_cd" value="03" />
              <div class="wrap_inp">
                <div class="left">
                  <br />
                  <br />
                  <br />
                  <span class="left_tit">학부/학과/전공</span>
                  <span class="right_tit">
                    <a href="#">학부/학과/전공 안내 ></a></span
                  >
                  <br />
                  <br />
                  <b-form-group>
                    <b-form-input
                      autofocus
                      list="dept_list"
                      placeholder="학부/학과/전공"
                      v-model="dept_input"
                      @input="updateDeptList"
                      autocomplete="off"
                      @focus="clearDeptInput"
                      class="forminput"
                    ></b-form-input>
                    <ul id="list" v-if="depts.length > 0">
                      <li v-for="d in depts" :key="d.idx" @click="seldept(d)">
                        <span>{{ d.name }}</span>
                      </li>
                    </ul>
                  </b-form-group>
                  <span class="left_tit">학번</span>
                  <span class="right_tit"> <a href="#">학번 안내 ></a></span>
                  <br />
                  <br />
                  <input
                    type="text"
                    class="inp placeholder"
                    name="userid"
                    id="userid"
                    placeholder="학번을 입력하세요"
                    v-model="user.number"
                    alt="input student number"
                    maxlength="20"
                    tabindex="1"
                  />
                  <span class="left_tit">학년</span>
                  <span class="right_tit"> <a href="#">학년 안내 ></a></span>
                  <br />
                  <br />
                  <b-form-group>
                    <b-form-select
                      v-model="user.grade"
                      v-bind:disabled="isDisabled"
                    >
                      <template v-if="user.dept < 10000">
                        <template v-for="item in gradeMax">
                          <b-form-select-option :value="item" :key="item">{{
                            item
                          }}</b-form-select-option>
                        </template>
                      </template>
                    </b-form-select>
                  </b-form-group>
                  <span class="left_tit">이름</span>
                  <span class="right_tit"><a href="#">이름 안내 ></a></span>
                  <br />
                  <br />
                  <input
                    type="text"
                    class="inp placeholder"
                    name="pwd"
                    v-model="user.name"
                    tabindex="2"
                    maxlength="20"
                    alt="input name"
                    placeholder="이름을 입력하세요"
                  />
                  <br />
                </div>
                <div class="left">
                  <a class="btn_login" @click="login">로그인</a>
                </div>
                <p class="desc"></p>
                <div class="left">
                  <span class="left_tit"><a href="#">ID 찾기 ></a></span>
                  <span class="right_tit">
                    <label for="">
                      <a href="#">비밀번호 초기화(PC) ></a>
                    </label>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div class="area_notice2">
            <img
              src="/assets/images/Symtra_Images/sso_login_signature2.jpg"
              alt=""
              width="67px"
              height="500px"
            />
          </div>
          <form action=""></form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { setCurrentUser, getCurrentUser } from "../../utils";

export default {
  data() {
    return {
      user: {
        number: "",
        grade: "",
        name: "",
        dept: "",
      },
      dept_input: "",
      selected_dept: "",
      depts: [],
      isDisabled: false,
      gradeMax: 4,
    };
  },
  methods: {
    login() {
      console.log(this.user);
      setCurrentUser(this.user);
      this.$router.push("/usaint/home");
    },
    clearDeptInput() {
      this.dept_input = "";
      this.selected_dept = 0;
      this.user.dept = "";
    },
    updateDeptList() {
      var search = this.dept_input;
      this.depts = this.filterDeptList(search);
      this.selected_dept = 0;
      this.user.dept = 0;
    },
    seldept(d) {
      let { idx, name } = d;
      this.depts = [];
      this.dept_input = name;
      this.selected_dept = idx;
      this.user = { ...this.user, dept: this.selected_dept };
      if (this.selected_dept >= 30000) this.isDisabled = true;
      else this.isDisabled = false;
      if (this.selected_dept == 7008) this.gradeMax = 5;
      else this.gradeMax = 4;
    },
    filterDeptList(search) {
      let depts = [];
      axios({
        method: "get",
        url: "/backend/user/department",
        params: {
          department: search,
        },
      }).then(
        (res) => {
          for (let d of res.data) {
            depts.push(d);
          }
        },
        (err) => console.log(err)
      );

      return depts;
    },
  },
  beforeCreate() {
    let user = getCurrentUser();
    if (
      user.dept != undefined &&
      user.grade != undefined &&
      user.name != undefined &&
      user.number != undefined
    )
      this.$router.push("/usaint/home");
  },
};
</script>

<style>
#list {
  font-size: 12px;
  list-style: none;
  margin: 0;
  z-index: 999;
  max-height: 200px;
  width: 25.7rem;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  padding: 5px 0;
  background-color: white;
  border-radius: 0 0 5px 5px;
  border: 1px #ccc solid;
}

#list li {
  display: block;
  padding: 5px 15px;
}

#list li:hover {
  background-color: #ccc;
  /*   color: white; */
}

#list li span {
  font-weight: 550;
  font-size: 15px;
}

#list li p {
  margin: 5px 0 0;
  font-size: 11px;
}
</style>