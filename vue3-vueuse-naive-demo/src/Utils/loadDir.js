export default function loadDir(metaObj){
    return Object.entries(metaObj).map(([k,v])=> v.default).flat()
}