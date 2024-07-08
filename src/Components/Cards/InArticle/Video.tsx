/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Video.scss";

export default function YouTubeVideo(props: any) {
  const src = props.src;
  const caption = props.caption

  return (
    <>
      <figure className="lili-video-figure">
        <div className="lili-video">
          <iframe
            width="100%"
            height="100%"
            src={src}
            title="MR互動體驗·趣學廿四節氣之夏至"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        {caption != null ? (<>
          <figcaption>{caption}</figcaption>
        </>): ""}
      </figure>
    </>
  );
}
