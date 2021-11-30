import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("./views/user"),
        redirect: `/user/login`,
    },
    {
        path: "/user",
        component: () => import("./views/user/"),
        children: [
            {
                path: "login",
                component: () => import("./views/user/Login")
            }
        ]
    },
    {
        path: "/usaint",
        component: () => import("./views/usaint"),
        children: [
            {
                path: "home",
                component: () => import("./views/usaint/Home")
            },
            {
                path: "facility",
                component: () => import("./views/usaint/facility/"),
                children: [
                    {
                        path: "maintenance",
                        component: () => import("./views/usaint/facility/maintenance/"),
                        children: [
                            {
                                path: "report",
                                component: () => import("./views/usaint/facility/maintenance/report")
                            },
                            {
                                path: "report-check",
                                component: () => import("./views/usaint/facility/maintenance/report-check")
                            }
                        ]
                    },
                    {
                        path: "apply",
                        component: () => import("./views/usaint/facility/apply"),
                        children: [
                            {
                                path: "locker",
                                component: () => import("./views/usaint/facility/apply/locker")
                            },
                            {
                                path: "room",
                                component: () => import("./views/usaint/facility/apply/room")
                            },
                            {
                                path: "field",
                                component: () => import("./views/usaint/facility/apply/field")
                            }
                        ]
                    }
                ]
            },
            {
                path: "ems",
                component: () => import("./views/usaint/ems/"),
                children: [
                    {
                        path: "course",
                        component: () => import("./views/usaint/ems/course/"),
                        children: [
                            {
                                path: "timetable",
                                component: () => import("./views/usaint/ems/course/Timetable"),
                                children: [
                                    {
                                        path:"hakbu",
                                        name:'hakbu',
                                        component: () => import("./views/usaint/ems/course/Hakbu"),

                                    },
                                    {
                                        path: "kyopill",
                                        name: "kyopill",
                                        component: () => import("./views/usaint/ems/course/Kyopill"), 
   
                                    },
                                    {
                                        path: "kyosun",
                                        name: "kyosun",
                                        component: () => import("./views/usaint/ems/course/Kyosun"), 
   
                                    },
                                    {
                                        path: "yeonkye",
                                        name: "yeonkye",
                                        component: () => import("./views/usaint/ems/course/Yeonkye"), 
   
                                    },
                                    {
                                        path: "yoonghap",
                                        name: "yoonghap",
                                        component: () => import("./views/usaint/ems/course/Yoonghap"), 
   
                                    },
                                    {
                                        path: "daehakwon",
                                        name: "daehakwon",
                                        component: () => import("./views/usaint/ems/course/Daehakwon"), 
   
                                    },
                                    {
                                        path: "tajeongong",
                                        name: "tajeongong",
                                        component: () => import("./views/usaint/ems/course/Tajeongong"), 
   
                                    },
                                    {
                                        path: "searchsbj",
                                        name: "searchsbj",
                                        component: () => import("./views/usaint/ems/course/Searchsbj"), 
   
                                    },
                                ]
                                

                                
                            
                                    
                            }
                            
                        ]
                    }
                ]
            },
        ]
    }
]

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history",
})

export default router;