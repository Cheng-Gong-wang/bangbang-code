var express = require('express');
var router = express.Router();
var db = require("./db.js")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



// 添加项目
router.get("/add", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var planname = req.query.planname;
  var cmtld = req.query.cmtld;
  var prjld = req.query.prjld;
  var leaderNext = req.query.leaderNext;
  var cdate = req.query.cdate;
  var mname = req.query.mname;
  var useLoc = req.query.useLoc;
  var mnum = req.query.mnum;

  if ((planname == "" || planname == undefined) && (cmtld == "" || cmtld == undefined)) {
    res.send({
      message: "计划总名称和提交人不能为空",
      code: -1
    })
  }
  var searchSql = "select * from plan where planname = ?";
  db.query(searchSql, [planname], function (result, fileds) {
    if (result.length) {
      res.send(
        {
          message: "已有该计划",
          code: 1
        })

    } else {
      var addSql = "insert into plan(planname, cmtld, prjld, leaderNext, cdate, mname, useLoc, mnum) values(?,?,?,?,?,?,?,?)";
      var addSqlQuery = [planname, cmtld, prjld, leaderNext, cdate, mname, useLoc, mnum];
      db.query(addSql, addSqlQuery, function (result, fileds) {
        if (fileds) {
          throw fileds;
          return;
        }
        res.send({
          message: "项目创建成功！",
          code: 0,
          data: result
        })
      })
    }
  })
});

// 查询项目
router.get("/search", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var planname = req.query.planname;
  if (!planname) {
    db.query("select * from plan ", [], function (result, fileds) {
      if (result.length) {
        res.send({
          data: result,
          message: "成功~",
          code: 0
        })
      } else {
        res.send({
          message: "该项目不存在，请输入正确的项目名!",
          code: 1
        })
      }
    })
  } else {
    db.query("select * from plan where planname = ?", [planname], function (result, fileds) {
      if (result.length) {
        res.send({
          data: result,
          message: "成功~",
          code: 0
        })
      } else {
        res.send({
          code: 200
        })
      }
    })
  }
})





module.exports = router;