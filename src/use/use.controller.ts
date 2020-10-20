import { Controller, Get, Query, Response, Post, Body, Headers } from '@nestjs/common';
import { UseService } from "./use.service"
// @Controller(路由参数)装饰器里的参数其实就是路由
@Controller('use')
export class UseController {
    // 注入依赖,引入操作数据的service(这里相当于实例化UseService这个类)
    constructor(private readonly useService: UseService) { }
    @Get()
    //使用@Query获取get的参数
    getUse(@Query() query): string {
        console.log(query);
        console.log( process.env);
        
        // res.send(this.useService.getUseData)
        return this.useService.getUseData()

    }
    // 用方法参数装饰器@Body来获取post请求的参数
    // 方法装饰器
    @Post('add')
    postUse(@Body() body, @Headers() Headers, @Response() res): void {
        console.log(body);
        console.log(Headers);
        res.send({
            msg: "请求成功",
            code: '1',
            data: [{
                name: "liao",
                sex: "女"
            }]
        })

    }
    // 获取单个参数
    @Get('jia')
    getOnly(@Query('id') id, @Response() res): void {
        console.log(id);
        res.send({
            msg: "请求成功",
            code: '1',
            data: [{
                name: "liao",
                sex: "女"
            }]
        })

    }
    @Post('update')
    postOnly(@Body('id') id, @Response() res): void {
        console.log(id);
        res.send({
            msg: "请求成功",
            code: '1',
            data: [{
                name: "liao",
                sex: "女"
            }]
        })
    }


}
