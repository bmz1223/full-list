
interface IParam {
    name: string,
    values: Array<string>
}
interface IListItem {
    [prop: string]: string
}
function fullList(arr: Array<IParam>) {

    const list: Array<IListItem> = []; // 生成列表
    const level = arr.length; // 规格个数
    let total = 1;
    for (let i = 0; i < level; i += 1) {
        total *= arr[i].values.length;
    }
    let k = 0;
    while (k < level) {
        let index = 1;
        for (let i = 0; i < k; i += 1) {
            index *= arr[i].values.length;
        }
        for (let j = 0; j < total; j += 1) {
            if (list.length < j + 1) {
                list.push({});
            }
            list[j][arr[k].name] =
                arr[k].values[
                Math.floor(j / (total / index / arr[k].values.length)) %
                arr[k].values.length
                ];
        }
        k += 1;
    }
    return list;
}
export = fullList