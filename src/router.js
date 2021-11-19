import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("./views/user"),
        redirect: `/usaint/home`
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
                                component: () => import("./views/usaint/ems/course/timetable")
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