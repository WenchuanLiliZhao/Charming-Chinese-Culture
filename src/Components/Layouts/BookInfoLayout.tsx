import "./BookInfoLayout.scss";

// import Article from "../Article/Article";
import Book_The_Lulu from "../Cards/Book_The_Lulu";
import DateFormatZh from "../../Functions/DateFormat";
import Article from "../Article/Article";
import Footer from "../Navigations/Footer";
import Stories from "../../Pages/Stories/Stories";
import Nav from "../Navigations/Nav";
// import SiteRoof from "../Navigations/SiteRoof";
// import Nav from "../Navigations/Nav";
// import PageHeader from "../Heading/PageHeader";

export default function BookInfoLayout(props: any) {
  const info = props.info;
  const startReading = props.startReading;


  // 以下，我需要将所有相关的 story 整理出来，放到 book info page 的底部
  // 但是，很无奈地，首先，story.info 中的 relatedBooks 不能为空，并且，全站至少需要有一个 art 属于 relatedBooks 这个 array 中
  // 因此，很无奈地，我们必须在一篇模版文章中接入模版 art，否则将无法正常运行程序
  // 目前我还没有找到其他办法
  var relatedStories = [];
  for (let i = 0; i < Object.values(Stories).length; i++) {
    const findStory = Object.values(Stories)[i];


    if ("relatedBooks" in findStory.info) {
      const findRelatedBooks = findStory.info.relatedBooks

      if (findRelatedBooks.length != 0) {
        for (let k = 0; k < findRelatedBooks.length; k++) {        
          if (findRelatedBooks[k].info == info) {
            relatedStories.push(findStory);
          }
        }
      }
    }
  }

  const theBook = (<>
    <div className="book-container">
      <div className="book-cover">
        <Book_The_Lulu cover={info.cover} />
        <div className="btns">
          <a className="btn positive" href={`/${startReading.info.key}`}>
            開始閱讀
          </a>
        </div>
      </div>
    </div>
  </>)

  return (
    <>
      <Nav mode="single" />

      <div className="book-info-layout">
        <div className="book-info-layout-container">
          <div className="left">
            <div className="book-info-article">
              <header className="book-info-title">
                <h1 className="title">
                  {info.title}
                  {info.isAudioBook == true ? (<>
                    <span className="audio-book-tag">有聲書</span>
                  </>) : (<></>) }
                </h1>
              </header>

              <div className="book-inline">
                {theBook}
              </div>

              <div className="book-info-table">
                {info.authors.map((item: any, i: number) => (
                  <div className="tr" key={`${item.role}-${i}`}>
                    <div className="th">{item.role}</div>
                    <div className="td">
                      {/* <a href=""> */}
                        {item.data.info.title}
                      {/* </a> */}
                    </div>
                  </div>
                ))}

                {info.language != null ? (
                  <div className="tr">
                  <div className="th">語言</div>
                  <div className="td">{info.language}</div>
                </div>
                ) : (<></>)}

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

                {info.isbn != null ? (
                  <div className="tr">
                    <div className="th">ISBN</div>
                    <div className="td">{info.isbn}</div>
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

                {info.originalPublishDate != null || info.era ? (
                  <div className="tr">
                    <div className="th">初版問世於</div>
                    <div className="td">
                      {info.originalPublishDate != null ? (
                        <DateFormatZh date={info.originalPublishDate} />
                      ) : (
                        info.era
                      )}
                    </div>
                  </div>
                ) : null}

                {info.originalPublisher != null ? (
                  <div className="tr">
                    <div className="th">此版出版社</div>
                    {typeof info.originalPublisher === "string" ? (<>
                      <div className="td">{info.originalPublisher}</div>
                    </>) : (<>
                      <div className="td">{info.originalPublisher.info.title}</div>
                    </>)}
                  </div>
                ) : null}
              </div>

              <Article isInner={true} font="system" className="introduction">
                <h2>本書介紹</h2>
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
