{
    //proxy 代理就是对对象的一些操作 get set has deletpro..
    var account = {
        id: 9923,
        name: "admin",
        phone: "18682924289",
        creat_time: "2020",
        _private: "test"
        // 代理操作，新建一个代理
    };
    var accountProxy = new Proxy(account, {
        // 拦截读取和设置的操作
        // 拦截读取get方式是一个函数
        get: function get(target, key) {
            
            //需要将手机号中间四位用*代替；将时间2019改为2020
            switch (key) {
                case "phone":
                return target[key].substring(0, 3) + "****" + target[key]
                case "creat_time":
                return target[key].replace("2019",2020);
                default:
                return target[key]
            }

        },
        // 如果设置id, 我就对该属性不进行操作，如果其他我们可以进行操作
        set: function set(target, key, value) {
            if (key === "id") {
                return target[key];
            } else {
                return target[key] = value;
            }
        },
        //拦截对象里面in操作 key in obj操作; 使用has(目标对象、属性名)



    })
}