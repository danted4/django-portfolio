import requests
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.conf import settings

# Create your views here.
@csrf_exempt
def get_client(request):
    # if request.method == 'GET':
    #    return render(request, 'client_provider/templates/frontend/index.html', {'finalState':{'state':'redux'}})
    # return HttpResponse('<h1>Not Found</h1>' , status = 404)
    if request.method == 'GET':
        rendered_payload = {'html': '<div class="container-fluid no-padding"><div class="row no-gutters"><div class="col-xs-12 col-md-12 col-lg-12 full-viewport-height clr d1"><nav class="clr d4 shadownav navbar navbar-expand-lg navbar-light fixed-top"><a class="fnt d4 bold glow navbar-brand" href="/home">|&lt; / &gt;</a><button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="clr m2 navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="basic-navbar-nav"><div class="mr-auto navbar-nav"><a href="/portfolio" class="fnt m2 nav-link">.portfolio()</a><a href="/resume" class="fnt m2 nav-link">.getResume()</a><a href="/about" class="fnt m2 nav-link">.about()</a></div></div></nav><div class="row no-gutters" location="[object Object]" computedmatch="[object Object]"><div class="col-xs-12 col-md-12 col-lg-12 margin-t-1x"><div class="viewport-height-80 text-center"><div class="viewport-height-20"></div><h1 class="fnt m2">Hi</h1><br><h4><span class="fnt d3">I am </span> <span class="fnt m2">Kanav Sharma.</span></h4><br><h6 class="fnt d3 homemarker"> I am a <span class="lnk-anim fnt m2">javascript full stack</span> developer.</h6><div class="row no-gutters"><div class="col-lg-6 col-md-6 col-xs-3 viewport-height-5 "></div><div class="col-lg-6 col-md-6 col-xs-6 viewport-height-5 "></div></div><br></div><div class="full-viewport-height clr d4 text-center fnt m3"><div class="viewport-height-5"></div><h2>Portfolio</h2><p class="margin-t-5x padding-r-l">I have always appreciated javascript and what it can do.</p><p class="padding-r-l">What can be better than exploring it\'s power along with HTML5 canvas to create some fun games. I\'ve created some of those and adding for you to explore.</p><h1 class="portfoliomarker">Coming Soon ...</h1></div><div class="viewport-height-80 text-center fnt m3"><div class="viewport-height-5"></div><h2>Looking to <span class="fnt m2">hire</span>?</h2><div class="viewport-height-10"></div><a class="resumemarker no-decor" href="https://docs.google.com/document/d/1FQG5x-RQwq0eU1JXURGm6Y9oN-EDqP4JchN075hL540/export?format=pdf"><button varient="primary" type="button" class="hvrAnim btn btn-primary">Download Resume</button></a><div class="viewport-height-10"></div><h4>Let\'s get in <span class="fnt m2">touch</span>...</h4><div class="viewport-height-10"></div><div class="row no-gutters"><div class="col-lg-3"></div><div class="col-lg-2 col-xs-2"><a class="no-decor" target="_new" rel="noopener" href="https://www.linkedin.com/in/sharma-kanav"> <img class="hvrAnim" src="../static/frontend/public/ln.png"></a></div><div class="col-lg-2 col-xs-2"><a class="no-decor" target="_new" rel="noopener" href="https://www.facebook.com/Danted4"><img class="hvrAnim" src="../static/frontend/public/fb.png"></a></div><div class="col-lg-2 col-xs-2"><a class="no-decor" target="_new" rel="noopener" href="https://twitter.com/Kanav94sharma"> <img class="hvrAnim" src="../static/frontend/public/tw.png"></a></div><div class="col-lg-3"></div></div></div><div class="viewport-height-80 clr d4 fnt m3"><div class="row no-gutters"><div class="col-lg-12 col-sm-12 col-xs-12 text-center"><div class="viewport-height-5"></div><h2>About</h2></div><div class="col-lg-12 col-sm-12 col-xs-12"><div class="viewport-height-10"></div></div><div class="aboutmarker col-lg-6 col-sm-6 col-xs-6 text-center b_r"><h3>me()</h3><p class="">Since childhood i\'m drawn to computers.<br>How they work and what they can do has always fascinated me.<br>While scrolling down you might have noticed,<br>I also enjoy <span class="b_light">developing games</span>, not only in javascript, but<br>on <span class="b_light">Unity</span> and <span class="b_light">C#</span> combination as well. It\'s my hobby.<br>The love for new techs has steered my career<br>from <span class="b_light">Unix</span> and <span class="b_light">Python</span> automation in early days to<br><span class="b_light"> Modern Web Full Stack.</span></p></div><div class="aboutmarker col-lg-6 col-sm-6 col-xs-6 text-center b_l"><h3><span class="fnt m2">this</span>.website()</h3><p class="">The stack used to build this website is<br><span class="b_light">Django </span> which is hosted on pythonanywhere cloud<br>and acts as a container for the client which<br>is built in <span class="b_light">React. </span>This is the main client app running inside django.<br><span class="b_light">Redux and Custom Middlewere </span>have been used to make api calls to <br>stored data on django. This project has been used as <br>an exploratory case, in order to develop my knowledge on django.</p></div></div></div><div class="viewport-height-10 clr d4 fnt m3 text-center"><p>© Kanav Sharma (developer)</p></div></div></div></div></div></div>', 'finalState' : {'init' : 0} }
        # try:
        #     res = requests.post(settings.RENDER_SERVER_BASE_URL + 'render',json={}, headers={'content_type': 'application/json'})
        #     rendered_payload = res.json()
        #     print(rendered_payload)
        # except Exception as e:
        #     print('error',e)
        #     return HttpResponse('<h1>Error Getting Client App at ' + settings.RENDER_SERVER_BASE_URL+ '</h1>' , status = 404)
        print('not in exception')
        return render(request, 'client_provider/templates/frontend/index.html', rendered_payload)