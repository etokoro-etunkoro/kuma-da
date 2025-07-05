from bottle import route, run, static_file

@route('/')
def index():
    return static_file('kuma_da.html', root='.')

run(host='0.0.0.0', port=8080, debug=True)
