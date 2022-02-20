using System.Linq.Expressions;

namespace iHome.Lib
{
    public static class Converter
    {
        public static Expression<Func<T, bool>> FuncToExpression<T>(Func<T, bool> f)
        {
            return x => f(x);
        }
    }
}