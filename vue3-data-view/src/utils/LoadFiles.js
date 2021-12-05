import spfiles from 'spfiles'

export default function loadFiles (path, type){
    spfiles(path, type).then(res => {
        console.log(res)
    })
}