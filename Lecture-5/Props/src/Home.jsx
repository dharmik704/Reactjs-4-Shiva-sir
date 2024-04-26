import Card from './Card'

function Home(){

    const product = [
        {img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRi7cohYkDop2b2eglB41V_4lwekl5MvSFY40WoUvACyPO2mngcSg1GN2BLUkgPd7EuXpa7RPCZOD738kM44SxkNmNrdZLhA9Qa5VMzxKU_JUuTK9PTFfphPg&usqp=CAE", Rating: 5, Name: "Galexy A05s", Price: "12,999", Description: "Best Product" },
        {img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRwRurWA0hLxkBkfJNbnfX-Z5VkLhYoLBpNeU1TTML0NixLPB6KbFq8NHejvfm4gZxVkm-th-L0dc6IeP1aQ9MOThafI_f7tKZxIlK-Qch7pIXQdstKF0K4&usqp=CAE", Rating: 4, Name: "Samsung Galaxy S22 5G", Price: "32,999", Description: "Best Product" },
        {img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQyvnh2yCHecRjVZGlLrnmKI5ISK6hSnxh8xIadl6VLUU3U99LLSedEOc5xCoybeeidkV16K-F03WXNRP72ORIlslkqM8UZUKn_LLnBqbqy4mAune6odX2iTg&usqp=CAE", Rating: 5, Name: "OPPO A17", Price: "12,499", Description: "Best Product" },
        {img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQt60KT4VAAvppN0Heps1CxZ8_ExiZTmm2Vr-uzJ2aEjtA2M_hnIJzCELwVRLk0d1tsGMW8m6UBbRurwuaO-A_VEU3xTXKG_ohBiy4mO3FzIZbnvXe9beoTHA&usqp=CAE", Rating: 4, Name: "OPPO A57", Price: "10,999", Description: "Best Product" },
        {img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtUgWGluUA6fi6Szbc8xQ7yv4AsS2g0xRY84HcBWJjn_Kc8IxFWrnbjbna5gOKrjqAOg2-p0ouKQNjDKpUo_i4AcwCTJCVxGL2gUGb1tZKxt9gy-KmkF6fOw&usqp=CAE", Rating: 4, Name: "OnePluse Nord CE3 Lite 5G", Price: "16,999", Description: "Best Product" },
        {img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTrGs_rmELQ7Gfew2filP5gifQZXKtKWvBmYZt_RqhktWTusGuQPmtny5neDVRFEanjEd6vJJStWjXh6PpWTOn5BT_tKVZZRQYdRKm3Q0s6rl8hNAAUCAsR&usqp=CAE", Rating: 3, Name: "OnePluse Nord CE4", Price: "24,999", Description: "Best Product" },
        {img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSENFbmJbA2qJLbl3jmZl970ehaJnM1qTxVjrya8mH6LvNGLzLKji3hAg1OCHTtFpBYTr9ese0wCJnhzZqHBudmjaDWVwegBpE3L3DggmgNJfPDRxxE-_Lv&usqp=CAE", Rating: 5, Name: "Vivo T2x 5G", Price: "17,999", Description: "Best Product" },
        {img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxjJOB2YIHrrR1nr7YDr3UqAmQUVaHKi1RLQ_iGwZM8vqV4MPOIhJklbsj0ErQfUYqZVKGkT7mw6btwkdcCfxKAYlzEhcUOWtTDfpo6s7cIi1SwF0TNauQZg&usqp=CAE", Rating: 5, Name: "Vivi V27 Pro 5G", Price: "31,999", Description: "Best Product" },
        {img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTc6ertkd-o4dp29jSgrze94Q2Jgc0tNcWCnZ3EKp04sSxIS4xtUPxjaSw1P0F_zXsP7E1xyQuC4348ntHPuKfrKQsgHtvAQMosodh86nyPsma-_WTUgxckrw&usqp=CAE", Rating: 3, Name: "Realme C55", Price: "13,999", Description: "Best Product" },
        {img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBsG0N60PSnvrSDoOfiiDcm_0AqChA-p0uCN6onb_7bVUzp3DKRfqDNsTLIRw7TczN_vLT57_zte3HlO1jAfWzVF2_BwXDtS5LBH_lK0shorltR4cy3RoZ8w&usqp=CAE", Rating: 4, Name: "Realme 12x 5G", Price: "14,499", Description: "Best Product" },
        {img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTK8pB3h40sMSt-pMr4xpcU6swPr-oYL8IUvW1Zf31NQH5U8bV3kaN1UGAAcWywq20lOe5EYA4caXksj2NtVHR2Rv-wp3Ifce14AqboEiV_SZR6C9xkI28N&usqp=CAE", Rating: 5, Name: "Realme 8 5G", Price: "15,999", Description: "Best Product" },
        {img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZPMqWlj0JPwHvNtRdboJJiGmicgOh75rINf5ByX4ALq2hMQMuCIf3vb_HZonAqi-9iXZ3dOe1hG3mctzJItbM4MxXViZu-yUNp78JlvPvmg4XBFYq9nsV&usqp=CAE", Rating: 4, Name: "iQOO Z6 Lite 5G", Price: "12,999", Description: "Best Product" },
        {img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGd5oIgIc5Mgcnowyv1L3gnmOUjWAnXDvZHUe0FatYSCFtdZqIqef1dLHdV6JpaURsQYH9fIz7ft1KxI2FKQmgjAvEAvOe2M3tp_yuQ6rNeUpPpK5RFDGrNA&usqp=CAE", Rating: 3, Name: "iQOO Neo 7 Pro 5G", Price: "23,999", Description: "Best Product" },
        {img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRamizwhycQkqbrlE-RfCySJkj7YxXCE-L58XE-X73yTQSmeLtKqjhVuFb5rdOW0vixE_WoI7gAfAUIX2OOo6u1i7KTPI2tHUveXqsm2CCUBUof-5A4ajly&usqp=CAE", Rating: 4, Name: "iQOO 11 5G", Price: "42,499", Description: "Best Product" },
        {img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8IRjKzQUM9wrSxfpdAkatNjgykxxzmJf-n92losMbFSl8JMPpa5YWAIpxKuKo9DcanMyNdLAB00Qp6GJhTf65FNOdcBNphix6IRIl1_L8l06CwvbFzuHY&usqp=CAE", Rating: 5, Name: "Apple iPhone 15 Pro", Price: "1,34,900 ", Description: "Best Product"},
        {img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwHGFf3u2gQQ3qnRoLaEQfAedADIHQfcFvioVHjXhpH4VINK0AFVjtZvEEVbLTdoLG1mo1oD0kFhn3nuwHd01MpbAz4nnUjxs5HrRFyPKstUIBTz4Dtceitj8&usqp=CAE", Rating: 4, Name: "Apple iPhone 14", Price: "58,999", Description: "Best Product" },
        {img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsJei8lQO2YOQfMQgdb1np6yVeZZSt456X79q47y4l2eZLM8nu3fLDyXSo2if7IH6SNo9v3RoNHDHELWpiXSNtvXPEcThIPg9bMJy1YubbFt9Rml2YDH7Yow&usqp=CAE", Rating: 4, Name: "Apple iPhone 13", Price: "52,900", Description: "Best Product" },
        {img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRt4ttKfw4R8Byre9vPavagvV6TKEGvx5dGyB25T9Ia0EDHNBuje4Hws75y8IjjZT7wbbPzB7CPr4yRsdRi1bPvx6FxlsRd13liFQ5uoY5oljuGF3XKNYU7ng&usqp=CAE", Rating: 4, Name: "Motorola Edge 40", Price: "26,999", Description: "Best Product" },
        {img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdYLGgLUwT1cfFAY9Rm1iLkDgD6j_HKkaLmLYG88A8YRJGDMImc52kdRy1DCZCi_1HYIkBx6YQZycrOqBDJPuae7BxdstSpl8xhkAZzh9FxOMAntcuuHpu&usqp=CAE", Rating: 5, Name: "Oneplus Open", Price: "1,34,890", Description: "Best Product" },
        {img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzsbKAbJ6eYPafPdOVD7M3bOzyj75kscsfiQvZ0n80SYMN3VTIX6cw19zvcZsOUbxKKv83kWtSndIzHcLra2KBTwDGz9-2dE6wk_1v9TdhRGkIzhB1wgY0ow&usqp=CAE", Rating: 4, Name: "Google - Pixel 7", Price: "41,999", Description: "Best Product" }
    ]

    return <div className='container'>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                product.map((v, i) => <Card key={i} { ...v }/>)
            } 
        </div>
    </div>
}

export default Home;