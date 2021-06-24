import JsFileDownloader from 'js-file-downloader';
const  download = (url, filename) =>{
    new JsFileDownloader({ url})
}

export default download;