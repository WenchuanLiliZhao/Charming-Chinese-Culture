import "./ArtInfoLayout.scss"
import Stories from "../../Pages/Stories/Stories";
import Nav from "../Navigations/Nav";
import DateFormatZh from "../../Functions/DateFormat";
import Article from "../Article/Article";
import Footer from "../Navigations/Footer";

export default function ArtInfoLayout(props: any) {
  const info = props.info;

  // 以下，我需要将所有相关的 story 整理出来，放到 art info page 的底部
  // 但是，很无奈地，首先，story.info 中的 relatedArts 不能为空，并且，全站至少需要有一个 art 属于 relatedArts 这个 array 中
  // 因此，很无奈地，我们必须在一篇模版文章中接入模版 art，否则将无法正常运行程序
  // 目前我还没有找到其他办法
  var relatedStories = [];

  for (let i = 0; i < Object.values(Stories).length; i++) {
    const findStory = Object.values(Stories)[i];

    if ("relatedArts" in findStory.info) {
      const findRelatedArts = findStory.info.relatedArts

      if (findRelatedArts.length != 0) {
        for (let k = 0; k < findRelatedArts.length; k++) {        
          if (findRelatedArts[k].info == info) {
            relatedStories.push(findStory);
          }
        }
      }
    }
  }

  const theBook = (<>
    <div className="big-art-container">
      <div className="big-art">
        <img src={info.src} alt="" />
      </div>
    </div>
  </>)

  return (
    <>
      <Nav mode="single" />

      <div className="big-art-info-layout">
        <div className="big-art-info-layout-container">
          <div className="left">
            <div className="big-art-info-article">
              <header className="big-art-info-title">
                <h1 className="title">{info.title}</h1>
              </header>

              <div className="big-art-inline">
                {theBook}
              </div>

              <div className="big-art-info-table">
                {info.authors.map((item: any, i: number) => (
                  <div className="tr" key={`${item.role}-${i}`}>
                    <div className="th">{item.role}</div>
                    <div className="td">{item.data.info.title}</div>
                  </div>
                ))}

                {info.language != null ? (
                  <div className="tr">
                  <div className="th">語言</div>
                  <div className="td">{info.language}</div>
                </div>
                ) : (<></>)}

                {info.originalPublishDate != null || info.era ? (
                  <div className="tr">
                    <div className="th">原作年代</div>
                    <div className="td">
                      {info.originalPublishDate != null ? (
                        <DateFormatZh date={info.originalPublishDate} />
                      ) : (
                        info.era
                      )}
                    </div>
                  </div>
                ) : null}

                {info.publishDate != null ? (
                  <div className="tr">
                    <div className="th">此版出版於</div>
                    <div className="td">
                      <DateFormatZh date={info.publishDate} />
                    </div>
                  </div>
                ) : null}

                {info.publisher != null ? (
                  <div className="tr">
                    <div className="th">此版出版社</div>
                    {typeof info.publisher === "string" ? (<>
                      <div className="td">{info.publisher}</div>
                    </>) : (<>
                      <div className="td">{info.publisher.info.title}</div>
                    </>)}
                  </div>
                ) : null}

                {info.update != null ? (
                  <div className="tr">
                    <div className="th">最後更新於</div>
                    <div className="td">
                      <DateFormatZh date={info.update} />
                    </div>
                  </div>
                ) : null}

                <div className="tr">
                  <div className="th">版權狀態</div>
                  <div className="td">{info.copyRight}</div>
                </div>

                
                {info.material != null ? (<>
                  <div className="tr">
                    <div className="th">材料</div>
                    <div className="td">
                      {info.material}
                    </div>
                  </div>
                </>) : (<></>)}
              </div>

              <Article isInner={true} font="system" className="introduction">
                <h2>作品介绍</h2>
                {props.children}

                {relatedStories.length != 0 ? (
                  <>
                    <h2>相關文章</h2>

                    {relatedStories.map((story: any, index: any) => (
                      <a className="related-story" key={`${story}-${index}`} href={`/${story.info.key}`}>
                        <div className="related-story-container">
                          <div className="related-story-info">
                            <div className="related-story-title-bar">
                              
                              <div className="related-story-title">
                                {story.info.title}
                              </div>

                              <div className="related-story-brief">
                                {story.info.brief}
                              </div>
                            </div>

                            <div className="related-story-authors">
                              {story.info.authors.map((author: any, k: number) => (
                                <span className="related-story-author" key={`${author.role}-${k}`}>
                                  <span className="role">
                                    {author.role}
                                  </span>
                                  <span className="name">
                                    {author.data.info.title}
                                  </span>
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="related-story-cover">
                            <div className="img" style={{ backgroundImage: `url(${story.info.cover})` }}></div>
                          </div>
                        </div>
                      </a>
                    ))}

                  </>
                ) : null}
              </Article>
            </div>
            <Footer />
          </div>

          <div className="right">
            {theBook}
          </div>
        </div>
      </div>
    </>
  );
}
