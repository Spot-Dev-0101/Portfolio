
//movingImage("#left_ccg", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
//movingImage("#right_ccg", 'left', function(pos){return ($(window).width()-$('#right_ccg').width())}, function(pos){return pos<($(window).width()-$('#right_ccg').width())}, function(pos){return (($(window).width()-pos)-$('#right_ccg').width())-50})

movingImage("#left_UEGame", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_UEGame", 'left', function(pos){return ($(window).width()-$('#right_UEGame').width())}, function(pos){return pos<($(window).width()-$('#right_UEGame').width())}, function(pos){return (($(window).width()-pos)-$('#right_UEGame').width())-50})

movingImage("#left_CSRenders", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_CSRenders", 'left', function(pos){return ($(window).width()-$('#right_CSRenders').width())}, function(pos){return pos<($(window).width()-$('#right_CSRenders').width())}, function(pos){return (($(window).width()-pos)-$('#right_CSRenders').width())-50})

movingImage("#left_ElderBoss", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_ElderBoss", 'left', function(pos){return ($(window).width()-$('#right_ElderBoss').width())}, function(pos){return pos<($(window).width()-$('#right_ElderBoss').width())}, function(pos){return (($(window).width()-pos)-$('#right_ElderBoss').width())-50})


movingImage("#left_VRSigns", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_VRSigns", 'left', function(pos){return ($(window).width()-$('#right_VRSigns').width())}, function(pos){return pos<($(window).width()-$('#right_VRSigns').width())}, function(pos){return (($(window).width()-pos)-$('#right_VRSigns').width())-50})

movingImage("#left_SkiTracker", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_SkiTracker", 'left', function(pos){return ($(window).width()-$('#right_SkiTracker').width())}, function(pos){return pos<($(window).width()-$('#right_SkiTracker').width())}, function(pos){return (($(window).width()-pos)-$('#right_SkiTracker').width())-50})

movingImage("#left_VRPiano", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_VRPiano", 'left', function(pos){return ($(window).width()-$('#right_VRPiano').width())}, function(pos){return pos<($(window).width()-$('#right_VRPiano').width())}, function(pos){return (($(window).width()-pos)-$('#right_VRPiano').width())-50})

movingImage("#left_SpaceWrangler", 'left', function(pos){return 0}, function(pos){return pos>0}, function(pos){return pos+50})
movingImage("#right_SpaceWrangler", 'left', function(pos){return ($(window).width()-$('#right_SpaceWrangler').width())}, function(pos){return pos<($(window).width()-$('#right_SpaceWrangler').width())}, function(pos){return (($(window).width()-pos)-$('#right_SpaceWrangler').width())-50})



//movingText("#project_desc_ccg")
movingText("#project_desc_UEGame")
movingText("#project_desc_CSRenders")
movingText("#project_desc_ElderBoss")
movingText("#project_desc_VRSigns")
movingText("#project_desc_SkiTracker")
movingText("#project_desc_VRPiano")
movingText("#project_desc_SpaceWrangler")

//($(window).width()-$('#right').width())
function movingImage(name, op, defaultVal, check, side){
    let reachedEnd = false
    $(window).on('load resize scroll', function() {
        if(reachedEnd == false){
            $(name).each(function() {
                var windowTop = $(window).scrollTop();
                var elementTop = $(this).offset().top;
                var leftPosition = side(windowTop - elementTop);
                if(check(leftPosition)){
                    leftPosition = defaultVal
                }
                change = {}
                change[op] = leftPosition
                $(name)
                .css(change);
            });
        }
    });
}


function movingText(name){
    $(window).scroll(function(){
        if(isScrolledIntoView(name)){
            $(document).ready(function(){
                $(name).animate({'margin-top': 50, 'opacity': 1}, 500);
            })
        }
    })
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();


    return ((docViewBottom >= elemTop));
}