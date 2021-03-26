<script>
    export default {
        name:'login',
        render(){
            return (
                <div className="login-box">
                    <form class="layui-form layui-form-pane" action="">
                      <div class="layui-form-item" pane>
                        <label class="layui-form-label">单选框</label>
                        <div class="layui-input-block">
                          <input type="radio" name="sex" value="男" title="男"/>
                          <input type="radio" name="sex" value="女" title="女" checked/>
                        </div>
                      </div>
                    </form>
                </div>
            )
        }
    }
</script>

<style lang="scss" scoped>

</style>