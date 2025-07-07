from bottle import route, run, static_file
@route('/<filename>')
def serve_static(filename):
    return static_file(filename, root='.')

@route('/')
def index():
    return static_file('kuma_da.html', root='.')

run(host='0.0.0.0', port=8080, debug=True)
