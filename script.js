const changeCard = () => {
    document.getElementById('basicPrinciplesOfWorkWithPersonnel-arraw').addEventListener('click', function () {
        document.getElementById('block-basicPrinciplesOfWorkWithPersonnel-wrapper-subtitle').innerHTML = `Непрерывное развитие персонала`
        document.getElementById('block-basicPrinciplesOfWorkWithPersonnel-wrapper-txt').innerHTML = `«ИНТЕКО» стремится к формированию обучающей рабочей среды, в которой новые знания и опыт сотрудники получают естественным путем – в рамках текущей деятельности, в процессах рабочего взаимодействия, через участие в девелоперских и трансформационных проектах. На внутрикорпоративных ресурсах формируется база знаний и инструментарий, с помощью которых сотрудники могут самостоятельно изучать интересующие их темы. В компании есть у кого учиться: представители «ИНТЕКО» являются авторитетными экспертами, чье мнение публикуют РБК, «Коммерсантъ», «Ведомости», ТАСС, «Интерфакс», «Строительная газета» и чьи интервью транслируют Business FM и РБК-ТВ.`
    })
}

function init() {
    changeCard()
}

window.onload = init